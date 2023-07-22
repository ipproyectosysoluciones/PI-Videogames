import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchVideogames } from '../../redux/actions';
import styles from './SearchBar.module.css';

const SearchBar = ( props ) => {
  const dispatch = useDispatch();
  const [ name, setName ] = useState( '' );

  const handlerInputChange = ( event ) => {
    event.preventDefault();
    setName( event.target.value );
  }

  const handlerSubmitSearch = ( event ) => {
    event.preventDefault();
    dispatch( searchVideogames( name ) );
    setName( '' );
  }

  return (
    <div className={ styles.searchBarContainer }>
      <input 
        onChange={ ( event ) => handlerInputChange( event ) }
        type='search'
        placeholder='Enter game name'
      />

      <button 
        className={ styles.searchButton }
        type='submit'
        onClick={ ( event ) => handlerSubmitSearch( event ) }
      >
        <span>Search Game</span>
      </button>
    </div>
  );
};

export default SearchBar;