import React from "react";
import "../styles/Footer.css";

// Import your SVG icons and logo here
import Logo from "/assets/images/logo.svg";
import TwitterIcon from "/assets/icons/twitter.svg";
import InstagramIcon from "/assets/icons/instagram.svg";
import FacebookIcon from "/assets/icons/facebook.svg";
import LinkedinIcon from "/assets/icons/Linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <small>© All Rights Reserved 2023</small>
      </div>

      <div className="footer-center">
        <img src={Logo} alt="Real rust logo" className="footer-logo" />
        <span className="footer-brand"></span>
      </div>

      <div className="footer-right">
        <a href="#" aria-label="Twitter" className="social-icon">
          <img src={TwitterIcon} alt="Twitter" />
        </a>
        <a href="#" aria-label="Instagram" className="social-icon">
          <img src={InstagramIcon} alt="Instagram" />
        </a>
        <a href="#" aria-label="Facebook" className="social-icon">
          <img src={FacebookIcon} alt="Facebook" />
        </a>
        <a href="#" aria-label="LinkedIn" className="social-icon">
          <img src={LinkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
