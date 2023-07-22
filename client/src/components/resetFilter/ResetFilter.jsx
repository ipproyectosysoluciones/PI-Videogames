import React from 'react';
import styles from './ResetFilter.module.css';

const ResetFilter = () => {

  const handlerButton = () => {
    setTimeout( function() {
      window.location.reload()
    }, 500 );
  };

  return (
    <div>
      <button className={ styles.button } onClick={ handlerButton }>
        <span>Reset Filter</span>
      </button>
    </div>
  );
};

export default ResetFilter;