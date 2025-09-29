import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './ProjectsToggle.css';

const ProjectsToggle = ({ mainProjects, jamProjects, learningProjects }) => {
  const [activeSection, setActiveSection] = useState('main');

  const sections = {
    main: {
      title: 'Proyectos Principales',
      projects: mainProjects,
      description: 'Proyectos profesionales y de mayor envergadura'
    },
    jams: {
      title: 'Proyectos Jams',
      projects: jamProjects,
      description: 'Proyectos desarrollados en hackathons y game jams'
    },
    learning: {
      title: 'Proyectos de Aprendizaje',
      projects: learningProjects,
      description: 'Proyectos creados para aprender nuevas tecnologías'
    }
  };

  return (
    <section className="projects-toggle" id="projects">
      <div className="container">
        <h2>Mis Proyectos</h2>
        
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${activeSection === 'main' ? 'active' : ''}`}
            onClick={() => setActiveSection('main')}
          >
            Principales
          </button>
          <button 
            className={`toggle-btn ${activeSection === 'jams' ? 'active' : ''}`}
            onClick={() => setActiveSection('jams')}
          >
            Jams
          </button>
          <button 
            className={`toggle-btn ${activeSection === 'learning' ? 'active' : ''}`}
            onClick={() => setActiveSection('learning')}
          >
            Aprendizaje
          </button>
        </div>

        <div className="section-info">
          <h3>{sections[activeSection].title}</h3>
          <p>{sections[activeSection].description}</p>
        </div>

        <div className="projects-grid">
          {sections[activeSection].projects.map((project, index) => (
            <ProjectCard key={`${activeSection}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsToggle;