import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from "../../redux/actions.js";
import styles from './Pagination.module.css';

const Pagination = ( { gamesPerPage, allVideogames } ) => {
  const numPage = useSelector( ( state ) => state.numPage );

  const pages = [];

  const totalPage = Math.ceil( allVideogames / gamesPerPage );

  for (let i = 0; i < totalPage; i++) {
    pages.push( i + 1 );
  }

  const dispatch = useDispatch();

  const paginate = ( pageNumber ) => {
    dispatch( setPage( pageNumber ) );
  }

  return (
    <nav className={ styles.paginationContainer }>
      {
        pages && pages.map( page => (
          <button 
            key={ page }
            onClick={ () => paginate( page ) }
            className={ `${ styles.pageButton } ${ page === numPage ? styles.active : ''}` }
          >
            { page }
          </button>
        ))
      }
    </nav>
  )
}

export default Pagination;