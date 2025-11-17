import React from "react";
import "../styles/RealtorSection.css";
export default function RealtorSection() {
  return (
    <section className="realtor-section">

      {/* LEFT TEXT */}
      <div className="left-content">
        <h2>Not Your Average Realtor</h2>
        <p>
          Real estate strategies for selling a property, advanced
          market-selling design, and effective marketing to get
          homeowners top dollar on their homes.
        </p>
      </div>

      {/* RIGHT IMAGES */}
      <div className="right-images">
        <img src="/assets/images/ellipse_11.svg" className="big-img" alt="" />
        <img src="/assets/images/ellipse 12.svg" className="small-img img1" alt="" />
        <img src="/assets/images/ellipse 13.svg" className="small-img img2" alt="" />
      </div>

      {/* BACKGROUND DECORATIVE ICONS */}
      <img src="/assets/shapes/ellipse 24.svg" className="icon icon1" alt="" />
      <img src="/assets/shapes/ellipse 25-1.svg" className="icon icon2" alt="" />
      <img src="/assets/shapes/group 1.svg" className="icon icon3" alt="" />
      <img src="/assets/shapes/ellipse 8.svg" className="icon icon4" alt="" />
      <img src="/assets/shapes/ellipse 17.svg" className="icon icon5" alt="" />
      <img src="/assets/shapes/ellipse 7.svg" className="shape shape1" alt="" />

    </section>
  );
}
