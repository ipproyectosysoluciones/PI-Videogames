import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/card/Card';
import styles from './SearchGames.module.css';

const SearchGames = ( props ) => {
  const searchVideogames = useSelector( ( state ) => state.Videogames );
  return (
    <div className={ styles.gameContainer }>
      {
        searchVideogames.map( ( game ) => {
          return (
            <Card
            key={ game.id }
            id={ game.id }
            name={ game.name }
            platforms={ game.platforms }
            image={ game.image }
            released={ game.released }
            rating={ game.rating }
            genres={ game.genres }
            />
          )
        })
      }
    </div>
  );
};

export default SearchGames;