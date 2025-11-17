import React, { useState } from "react";
import "../styles/LearnMore.css";
import footerImg from "/assets/images/footer-image.svg";

const LearnMore = () => {
  const [email, setEmail] = useState("");

  async function handleSubscribe() {
    if (!email) return alert("Please enter an email");

    try {
      const res = await fetch("https://placement-backend-q4mh.onrender.com/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      alert(data.message || "Subscription added");

      setEmail(""); // clear input
    } catch (err) {
      alert("Subscription failed");
    }
  }

  return (
    <div className="learnmore">
      <img src={footerImg} alt="Background" className="learnmore-bg" />

      <div className="learnmore-content">
        <p>
          Learn more about our listing process, as well as our
          <br /> additional staging and design work.
        </p>
        <button className="learnmore-button">LEARN MORE</button>
      </div>

      <div className="learnmore-bluebar">
        <nav className="bluebar-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact</a>
        </nav>

        <div className="bluebar-subscribe">
          <p className="bluebar-subscribeUs">Subscribe Us</p>

          <input
            type="email"
            placeholder="Enter Email Address"
            className="bluebar-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
