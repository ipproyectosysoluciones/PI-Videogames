import React from 'react';
import styles from './GenderFilter.module.css';

const GenderFilter = () => {
  return (
    <div className={ styles.filterContainer }>
      <select defaultValue='default'>
        <option value='default' disabled>Filter by Genre</option>
      </select>    
    </div>
  )
}

export default GenderFilter