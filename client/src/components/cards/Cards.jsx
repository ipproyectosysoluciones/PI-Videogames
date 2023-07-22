import React from 'react';
import { useSelector } from "react-redux";
import Card from '../card/Card';
import styles from './Cards.module.css';

const Cards = () => {
  const Videogames = useSelector( state => state.Videogames );

  return (
    <div className={ styles.cardsContainer }>
      {
        Videogames.map( ( game ) => {
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
  )
}

export default Cards;