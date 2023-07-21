import React from 'react';
import styles from './ResetFilter.module.css';

const ResetFilter = () => {
  return (
    <div>
      <button className={ styles.button }>
        <span>Reset Filter</span>
      </button>
    </div>
  )
}

export default ResetFilter