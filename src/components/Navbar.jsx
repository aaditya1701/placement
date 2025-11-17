import React from "react";
import "../styles/navbar.css";
import logo from "/assets/Images/logo.svg"; // correct path

const Navbar = ({
  scrollHome,
  scrollServices,
  scrollProjects,
  scrollTestimonials,
  scrollContact
}) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Real Trust Logo" className="nav-logo" />
      </div>

      <ul className="nav-links">
        <li onClick={scrollHome}>HOME</li>
        <li onClick={scrollServices}>SERVICES</li>
        <li onClick={scrollProjects}>ABOUT PROJECTS</li>
        <li onClick={scrollTestimonials}>TESTIMONIALS</li>
      </ul>

      <button className="contact-btn" onClick={scrollContact}>CONTACT</button>
    </nav>
  );
};

export default Navbar;
