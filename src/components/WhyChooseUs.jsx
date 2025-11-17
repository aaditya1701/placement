import React from "react";
import "../styles/WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="whychoose-container" id="services">

      {/* ---------- TOP SECTION ---------- */}
      <h2 className="title">Why Choose Us?</h2>
      <div className="underline"></div>

      <div className="cards-row">
        <div className="card-item">
          <img src="/assets/icons/home-icon.svg" alt="" className="card-icon" />
          <h3>Potential ROI</h3>
          <p>
            Whether you&apos;re looking to buy a home or renovate it, we&apos;ll
            help you maximize your return on investment.
          </p>
        </div>

        <div className="card-item">
          <img src="/assets/icons/design-icon.svg" alt="" className="card-icon" />
          <h3>Design</h3>
          <p>
            Our experts guide you through design options and create comfortable,
            modern interiors.
          </p>
        </div>

        <div className="card-item">
          <img src="/assets/icons/marketing-icon.svg" alt="" className="card-icon" />
          <h3>Marketing</h3>
          <p>
            Smart digital marketing plans that help you stand out in today&apos;s
            marketplace.
          </p>
        </div>
      </div>

      {/* ---------- IMAGE COLLAGE SECTION ---------- */}
      <div className="collage">
        {/* LEFT SMALL IMAGE */}
        <div className="collage-box small left">
          <img src="/assets/small-1.jpg" alt="small1" className="collage-img" />

          <img src="/assets/corner-blue.png" className="corner corner-blue top-right" alt="" />
          <img src="/assets/corner-orange.png" className="corner corner-orange bottom-left" alt="" />
        </div>

        {/* CENTER LARGE IMAGE */}
        <div className="collage-box large center">
          <img src="/assets/large.jpg" alt="large" className="collage-img" />

          <img src="/assets/corner-blue.png" className="corner corner-blue top-right" alt="" />
          <img src="/assets/corner-orange.png" className="corner corner-orange bottom-right" alt="" />
        </div>

        {/* RIGHT SMALL IMAGE */}
        <div className="collage-box small right">
          <img src="/assets/small-2.jpg" alt="small2" className="collage-img" />

          <img src="/assets/corner-blue.png" className="corner corner-blue top-left" alt="" />
          <img src="/assets/corner-orange.png" className="corner corner-orange bottom-right" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
