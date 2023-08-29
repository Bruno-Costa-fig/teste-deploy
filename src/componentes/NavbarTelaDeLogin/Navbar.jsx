import React from 'react';
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';
import { FaGoogle, FaWhatsapp } from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-section">
        <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
          <FaGoogle className="logo" />
        </a>
        <div className="contact-info">
          <p>contato@devinpharmacy.com.br</p>
        </div>
        <a href="https://api.whatsapp.com/send?phone=5519911111333" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="whatsapp-icon" />
        </a>
        <p>(99) 1111-1333</p>
      </div>
      <div className="right-section">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineTwitter className="social-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineInstagram className="social-icon" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineFacebook className="social-icon" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineLinkedin className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
