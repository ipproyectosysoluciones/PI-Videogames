import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={ styles.container }>
      <div className={ styles.text }>
        <p>PI</p>
        <p>Videogames</p>
        <p>Henry</p>
      </div>

      <div className={ styles.divButton }>
        <button className={ styles.button } type='button'>
          <NavLink to='/home'>Enter</NavLink>
        </button>
      </div>
   </div>
  )
};

export default Landing;