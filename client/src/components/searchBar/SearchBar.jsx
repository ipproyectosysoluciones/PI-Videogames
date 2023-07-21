import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={ styles.searchBarContainer }>
      <input 
        type='search'
        placeholder='Enter game name'
      />

      <button className={ styles.searchButton }>
        <span>Search</span>
      </button>
    </div>
  )
}

export default SearchBar