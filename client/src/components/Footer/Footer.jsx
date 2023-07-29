import React, { Component } from 'react';
import styles from './Footer.module.css';

export class Footer extends Component {
  render() {
    return (
      <footer className={ styles.footer }>
        <div className={ styles.footerContent }>
          <h5>Información</h5>
          <p>Proyecto Individual soyHenry por Bladimir Parra Bermudez <br/>
            info@ipproyectosysolucione.com.co Medellín - Colombia 
          </p>

          <div className={ styles.socialDiv }>
            <a href="https://www.linkedin.com/in/bladimir-gerson-parra-bermudez/">LINKEDIN<img src="https://i.postimg.cc/xThMr2PB/logo-Linkedin.png" alt="linkedin" />
            </a>
            <a href="https://github.com/ipproyectosysoluciones">GITHUB<img src="https://i.postimg.cc/Vs9NRcSz/logo-Git-Hub.png" alt="github" />
            </a>
          </div>
        </div>
      </footer>
      
    );
  };
};

export default Footer;