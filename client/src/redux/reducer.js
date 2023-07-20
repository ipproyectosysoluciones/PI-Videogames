import { 
  ALL_GENRE,
  DETAIL_VIDEOGAMES,
  FILTER_GENRE,
  GET_VIDEOGAMES,
  RESET_FILTER_GENRES,
  RESET_ORDER,
  SEARCH_VIDEOGAMES,
  SET_PAGE,
  SORT_VIDEOGAMES_ASC_DESC,
  SORT_VIDEOGAMES_RATING, 
} from "./actions-types";

const initialState = {
  Videogames: [],
  VideogamesCopy: [],
  DetailGame: [],
  SearchGame: [], 
  FilteredGenres: [],
  genres: [],
  numPage: 1,
};

const reducer = ( state = initialState, { type, payload } ) => {
  switch ( type ) {
    case GET_VIDEOGAMES:
      return{
        ...state,
        Videogames: payload,
        VideogamesCopy: payload,
      };

    case DETAIL_VIDEOGAMES:
      return{
        ...state,
        DetailGame: payload,
      };

    case SEARCH_VIDEOGAMES:
      return{
        ...state,
        Videogames: payload,
      };

    case ALL_GENRE:
      return{
        ...state,
        genres: payload,
      };

    case FILTER_GENRE:
      const VideogamesCopy = state.VideogamesCopy;

      const gamesGenres =
        payload === "all"
        ? VideogamesCopy
        : VideogamesCopy.filter( ( game ) =>
            game.genres.includes( payload )
          );
      return{
        ...state,
        Videogames: gamesGenres,
        numPage: 1,
      };

    case SORT_VIDEOGAMES_ASC_DESC:
      let videogamesSort = payload === "asc"
        ? state.Videogames.sort( ( a, b ) => {
          if ( a.name > b.name ) {
            return 1;
          }
          if ( b.name > a.name ) {
            return -1;
          }
          return 0;
        })
        : state.Videogames.sort( ( a, b ) => {
          if ( a.name > b.name ) {
            return -1;
          }
          if ( b.name > a.name ) {
            return 1;
          }
          return 0;
        })
      return{
        ...state, 
        Videogames: videogamesSort,
        numPage: 1,
      };

    case SORT_VIDEOGAMES_RATING:
      let videogamesSortRating = payload === "best"
      ? state.Videogames.sort( ( a, b ) => {
        if ( a.rating > b.rating ) {
          return -1;
        }
        if ( b.rating > a.rating ) {
          return 1;
        }
        return 0;
      })
      : state.Videogames.sort( ( a, b ) => {
        if ( a.rating > b.rating ) {
          return 1;
        }
        if ( b.rating > a.rating ) {
          return -1;
        }
        return 0;
      })
      return{
        ...state,
        Videogames: videogamesSortRating,
        numPage: 1,
      };

    case RESET_FILTER_GENRES:
      return{
        ...state,
        Videogames: state.VideogamesCopy
      };

    case RESET_ORDER:
      return{
        ...state,
        Videogames: [
          ...state.VideogamesCopy
        ]
      };

    case SET_PAGE:
      return{
        ...state,
        numPage: payload 
      };
  
    default:
      return { ...state };
  };
};

export default reducer;