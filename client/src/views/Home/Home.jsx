import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { getVideogames, orderVideogamesAscDesc, orderVideogamesByRating } from '../../redux/actions';
import SearchBar from '../../components/searchBar/SearchBar';
import GenderFilter from '../../components/genderFilter/GenderFilter';
import ResetFilter from '../../components/resetFilter/ResetFilter';
import Pagination from '../../components/pagination/Pagination';
import Card from '../../components/card/Card';
import Loading from '../../components/loading/Loading';
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const [ aux, setAux ] = useState( false );

  const allVideogames = useSelector( ( state ) => state.Videogames );
  const numPage = useSelector( ( state ) => state.numPage );

  //estados locales para el paginado
  const [ gamesPerPage ] = useState( 15 );

  //obtener el indice del ultimo game
  const indexLastGame = numPage * gamesPerPage;

  //obtener el indice del primer game
  const indexFirstGame = indexLastGame - gamesPerPage;

  //obtener el corte de los games por pagina
  const currentGames = allVideogames.slice( indexFirstGame, indexLastGame );

  useEffect( () => {
    dispatch( getVideogames() )
  }, [ dispatch ] );

  const handleOrderAscDesc = ( event ) => {
    event.preventDefault();
    dispatch( orderVideogamesAscDesc( event.target.value ) )
    setAux( !aux );
  }

  const handleOrderRating = ( event ) => {
    event.preventDefault();
    dispatch( orderVideogamesByRating( event.target.value) )
    setAux( !aux );
  }

  return (
    <div className={ styles.header }>
      <div className={ styles.container }>
        <SearchBar/>

        <GenderFilter/>

        <div className={ styles.filter }>
          <select onChange={ ( event ) => handleOrderAscDesc( event ) }>
            <option value='default'>Select by Order</option>
            <option value='asc'>Ascendent</option>
            <option value='desc'>Descendent</option>
          </select>
        </div>

        <div className={ styles.rating }>
          <select onChange={ ( event ) => handleOrderRating( event ) }>
            <option value='default'>Select by Rating</option>
            <option value='best'>Best</option>
            <option value='worst'>Worst</option>
          </select>
        </div>

        <ResetFilter/>

        <button className={ styles.buttonCreate }>
          <NavLink style={ { textDecoration: 'none' } } to='/form'>
            <span>Create Game</span>
          </NavLink>
        </button>
      </div>

      <div className={ styles.pagination }>
        <Pagination
          gamesPerPage={ gamesPerPage } /* juegos por paginas */
          allVideogames={ allVideogames.length } /* todos los juegos */
        />
      </div>

      <div className={ styles.paginationCards }>
        {
          currentGames[ 0 ] ? (
            currentGames?.map( game => {
              return (
                <Card
                  key={ game.id }
                  id={ game.id }
                  name={ game.name }
                  image={ game.image }
                  genres={ game.genres }
                  rating={ game.rating }
                />
              )
            })
          ) : ( 
            <Loading/>
          )
        }
      </div>

      <div className={ styles.pagination }>
        <Pagination
          gamesPerPage={gamesPerPage} /* juegos por paginas */
          allVideogames={allVideogames.length} /* todos los juegos */
        />
      </div>
    </div>
  )
}

export default Home;