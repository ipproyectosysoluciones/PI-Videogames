import { 
  GET_VIDEOGAMES,
  DETAIL_VIDEOGAMES,
  SEARCH_VIDEOGAMES,
  // CREATE_VIDEOGAMES,
  FILTER_GENRE,
  ALL_GENRE,
  SORT_VIDEOGAMES_ASC_DESC,
  SORT_VIDEOGAMES_RATING,
  RESET_FILTER_GENRES,
  RESET_ORDER,
  SET_PAGE
 } from './actions-types';
 import axios from 'axios';

export const getVideogames = () => {
  return async ( dispatch ) => {
    try {
      const apiData = await axios.get( '/videogames' );
      const Videogames = apiData.data;
      
      dispatch({
        type: GET_VIDEOGAMES,
        payload: Videogames,
      });
    } catch ( error ) {
      console.log( error.message );
    };
  };
};

export const detailVideogames = ( id ) => {
  return async ( dispatch ) => {
    try {
      const apiData = await axios.get(`/videogames/${id}`);
      const DetailGame = apiData.data;
      dispatch({
        type: DETAIL_VIDEOGAMES,
        payload: DetailGame,
      });
    } catch ( error ) {
      console.log( error.message );
    };
  };
};

export const searchVideogames = ( name ) => {
  return async ( dispatch ) => {
    try {
      const apiData = await axios.get(`/videogames/name?name=${name}`);
      const videogames = apiData.data; 
      dispatch({
        type: SEARCH_VIDEOGAMES,
        payload: videogames
      });
    } catch ( error ) {
      console.log( error.message );
    };
  };
};

// export const createVideogames = ( videogame ) => {
//   return async ( dispatch ) => {
//     try {
//       console.log( videogame );

//       const { data } = await axios.post( '/videogames', videogame );
//       return dispatch({
//         type: CREATE_VIDEOGAMES,
//         payload: data,
//       });
//     } catch ( error ) {
//       console.log( error.message );
//     };
//   };
// };

export const AllGenres = () => {
  return async ( dispatch ) => {
    try {
      const apiData = await axios.get('/genres');
      const genres = apiData.data;
      dispatch({
        type: ALL_GENRE,
        payload: genres,
      })
    } catch ( error ) {
      console.log( error.message, 'mistake in genres' );
    };
  };
};

export const filterGenre = ( payload ) => {
  return{
    type: FILTER_GENRE,
    payload
  };
};

export const orderVideogamesAscDesc = ( payload ) => {
  return {
    type: SORT_VIDEOGAMES_ASC_DESC,
    payload
  };
};

export const orderVideogamesByRating = ( payload ) => {
  return {
    type: SORT_VIDEOGAMES_RATING,
    payload
  };
};

export const resetGenres = ( payload ) => {
  return {
    type: RESET_FILTER_GENRES,
    payload
  };
};

export const resetOrder = ( payload ) => {
  return {
    type: RESET_ORDER,
    payload
  };
};

export const setPage = ( page ) =>{
  return {
    type: SET_PAGE,
    payload: page
  };
};