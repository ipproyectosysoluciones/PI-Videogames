import React from 'react';
import styles from "./Landing.module.css";
import { NavLink } from 'react-router-dom';

const Landing = () => {
  return (
    <div className={ styles.background }>
      <div className={ styles.card }>
        {/* <img src="../../assets/conjunto-logo.png" alt='' /> */}
          <NavLink to='/home'>
            <button className={ styles.button }>Ingresar</button>
          </NavLink>
        <div className={ styles.socialDiv }>
          <a target="_blank" href="https://www.linkedin.com/in/bladimir-gerson-parra-bermudez" rel='noreferrer'><img src="https://i.postimg.cc/xThMr2PB/logo-Linkedin.png" alt="lindeIn" />LindeIn</a>
          <a target="_blank" href="https://github.com/ipproyectosysoluciones" rel='noreferrer'><img src="https://i.postimg.cc/Vs9NRcSz/logo-Git-Hub.png" alt="github" />GitHub</a>
        </div>
      </div>
    </div>
  )
};

export default Landing;