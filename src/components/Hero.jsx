import React from "react";
import "../styles/hero.css";
import heroImage from "/assets/images/hero-img.svg"; // change image name as needed
import ConsultationForm from "./ConsultationForm";

const HeroSection = () => {
  return (
    <div className="hero-wrapper" id="home">
      <img src={heroImage} className="hero-bg" />

      <div className="hero-content">
        <h1>
          Consultation, <br />
          Design, <br />
          & Marketing
        </h1>
        <ConsultationForm />

      </div>
    </div>
  );
};

export default HeroSection;
