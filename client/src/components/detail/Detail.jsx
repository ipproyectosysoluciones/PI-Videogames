import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detailVideogames } from '../../redux/actions';
import Loading from '../loading/Loading';
import styles from './Detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( detailVideogames( id ) );
  }, [ dispatch, id ] );

  const [ loading, setLoading ] = useState( true );

  useEffect( () => {
    const timer = setTimeout( () => {
      setLoading( false );
    }, 1500 );
    return () => clearTimeout( timer );
  }, [] );

  const DetailGame = useSelector( ( state ) => state.DetailGame );

  const platforms = DetailGame.platforms;
  const genres = DetailGame.genres;

  return (
    <>
      {
        loading ? (
          <Loading/>
        ) : (
          <div className={ styles.detailContainer }>
            <div className={ styles.detailImage }>
              <h1>{ DetailGame.name }</h1>
              <img src={ DetailGame.image } alt={ DetailGame.name }/>
              <h3>Plataform: </h3>
              <p>{ platforms }</p>
              <p>Released: { DetailGame.released }</p>
              <a href={ DetailGame.website }>WebSite</a>
            </div>

            <div className={ styles.detailInfo }>
              <h3>Description: </h3>
              <p>{ DetailGame.description }</p>
              <p>Rating: { DetailGame.rating }</p>
              <p>Genres: { genres }</p>
            </div>
          </div>
        )
      };
    </>
  );
};

export default Detail;