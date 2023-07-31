import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ( props ) => {
  const id = props.id;

  return (
    <div className={ styles.container }>
      <Link to={ `/detail/${ id }` } style={{ textDecoration: "none" }}>
        <img src={ props.image } alt={ props.name } />
        <h1>{ props.name }</h1>
        <p>Genres: { props.genres } </p>
        <p>Rating: { props.rating } </p>
      </Link>
    </div>
  )
}

export default Card;