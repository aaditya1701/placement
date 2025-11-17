import React, { useEffect, useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")   // FIXED BACKEND URL
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch project data");
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="projects-section">
      <h2 className="projects-title">Our Projects</h2>
      <p className="projects-subtitle">
        We know what buyers are looking for and suggest projects that will bring
        clients top dollar for the sale of their homes.
      </p>

      {/* Error State */}
      {error && (
        <div className="error-box">
          <p><strong>Failed to fetch Projects</strong></p>
          <button onClick={() => window.location.reload()} className="retry-btn">
            Retry
          </button>
        </div>
      )}

      <div className="projects-grid">
        {/* Loading skeletons */}
        {loading &&
          Array.from({ length: 5 }).map((_, idx) => (
            <div className="project-card skeleton" key={idx}>
              <div className="skeleton-img"></div>
              <div className="skeleton-line short"></div>
              <div className="skeleton-line long"></div>
              <div className="skeleton-btn"></div>
            </div>
          ))}

        {/* Project Cards */}
        {!loading &&
          !error &&
          projects.map((p) => (
            <div className="project-card" key={p._id}>
              <img src={p.image} alt={p.projectName} className="project-image" />

              <h3 className="project-name">{p.title}</h3>
              <p className="project-type">{(p.projectName || "Project Name") +", "+ (p.location || "Location")}</p>

              <button className="project-btn">Learn More</button>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Projects;
