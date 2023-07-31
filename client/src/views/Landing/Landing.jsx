import React from 'react';
import {Link } from 'react-router-dom';
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <h1 className={styles.titleContainer}>VideoGames </h1>
      <h3 className={styles.subTitleContainer}>
        Welcome to the Henry´s Videogames App
      </h3>
      <Link to="/home">
        <button type="submit">Enter</button>
      </Link>
    </div>
  )
};

export default Landing;