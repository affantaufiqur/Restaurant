import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">552 Queen Street, London, EC14 0ME</p>
        <p className="p__opensans">+44 1632 960067</p>
        <p className="p__opensans">+44 1632 960834</p>
      </div>
    
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="gericht footer logo" />
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt="spoon footer" className="spoon__img" style={{ marginTop: '.5rem'}} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 AM - 12:00 AM</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 AM - 11:00 PM</p>
      </div>
    </div>
    
    <div className="footer__copyright">
        <p className="p__opensans">2021 Gericht. All rights reserved</p>
      </div>
  </div>
);

export default Footer;
