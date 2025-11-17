import React, { useEffect, useState } from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/testimonials")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch testimonial data");
        return res.json();
      })
      .then((data) => {
        setClients(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="testimonials-section">
      <h2 className="title">Happy Clients</h2>

      {/* Error Message */}
      {error && (
        <div className="error-box">
          <p><strong>Failed to fetch testimonial data</strong></p>
          <button onClick={() => window.location.reload()} className="retry-btn">
            Retry
          </button>
        </div>
      )}

      <div className="testimonials-grid">
        {/* Skeleton Loading */}
        {loading &&
          Array.from({ length: 5 }).map((_, idx) => (
            <div className="testimonial-card skeleton" key={idx}>
              <div className="skeleton-avatar"></div>
              <div className="skeleton-line long"></div>
              <div className="skeleton-line long"></div>
              <div className="skeleton-line short"></div>
              <div className="skeleton-line short"></div>
            </div>
          ))}

        {/* Real Testimonials */}
        {!loading &&
          !error &&
          clients.map((client) => (
            <div className="testimonial-card" key={client.id}>
              <img
                src={client.image}
                alt={client.name}
                className="client-avatar"
              />

              <p className="testimonial-text">{client.description}</p>

              <h3 className="client-name">{client.name}</h3>
              <p className="client-role">{client.role}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Testimonials;
