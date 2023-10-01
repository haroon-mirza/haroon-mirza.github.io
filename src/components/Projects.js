import React from 'react';
import '../styles/Projects.css'; // Create this next

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>Description of Project 1.</p>
      </div>
      {/* Repeat for other projects */}
    </section>
  );
}

export default Projects;
