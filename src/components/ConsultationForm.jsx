import React, { useState } from "react";
import "../styles/consultationForm.css";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  // Update inputs
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Submit form
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message || "Form submitted!");
    } catch (error) {
      alert("Error submitting form");
    }
  }

  return (
    <div className="container">
      <div className="form-card">
        <h2>Get a Free Consultation</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Enter Email Address"
            onChange={handleChange}
          />
          <input
            name="mobile"
            type="tel"
            placeholder="Mobile Number"
            onChange={handleChange}
          />
          <input
            name="city"
            type="text"
            placeholder="Area / City"
            onChange={handleChange}
          />

          <button type="submit">Get Quick Quote</button>
        </form>
      </div>
    </div>
  );
}
