import React from 'react';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={ styles.navBarContainer }>
      <img className={ styles.logo } src='' alt=''/>
      <h2>Video Games</h2>

      <button className={ styles.button }>
        <NavLink to='/home'>
          <span>Home</span>
        </NavLink>
      </button>
    </div>
  )
};

export default NavBar;