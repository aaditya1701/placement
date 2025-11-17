import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">About Us</h2>
      <div className="underline"></div>

      <p className="about-text">
        Fifteen years of experience in real estate, excellent customer service,
        and a commitment to work hard, listen and follow through. We provide
        quality service to build relationships with clients and, more
        importantly, maintain those relationships by communicating effectively.
      </p>

      <button className="learn-more-btn">Learn More</button>
    </section>
  );
};

export default AboutUs;
