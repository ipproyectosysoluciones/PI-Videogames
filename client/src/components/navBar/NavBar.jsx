import React from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';

const NavBar = () => {
  return (
    <div className={ styles.navContainer }>
      <Link to='/'>
        <img className={ styles.navLogo } src="/Videogames_logo2.png" alt="logo" />
      </Link>
      <title>Home</title>
      <h1>Videogames</h1>

      <SearchBar/>

      <ul>
          <Link to="/home">
              <li>Home</li>
          </Link>
          <Link to="/form">
              <li>Create Game</li>
          </Link>
          <Link to="/">
              <li>Exit</li>
          </Link>
      </ul>
  </div>
  )
};

export default NavBar;