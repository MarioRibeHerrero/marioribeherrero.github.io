import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectSection.css';

const ProjectSection = ({ title, projects, id }) => {
  return (
    <section className="project-section" id={id}>
      <div className="container">
        <h2>{title}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;