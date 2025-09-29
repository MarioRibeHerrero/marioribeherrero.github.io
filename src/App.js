import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import ProjectsToggle from './components/ProjectsToggle';
import Contact from './components/Contact';

function App() {
  const mainProjects = [
    {
      title: "Sistema de Gestión Empresarial",
      description: "Plataforma completa para la gestión de recursos empresariales con dashboard interactivo",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      title: "Aplicación de Finanzas Personales",
      description: "App móvil para el control y análisis de gastos personales con gráficos en tiempo real",
      technologies: ["React Native", "Firebase", "Chart.js"],
      link: "#",
      github: "#"
    }
  ];

  const jamProjects = [
    {
      title: "Game Jam 2024 - Space Explorer",
      description: "Juego 2D desarrollado en 48 horas para la Global Game Jam con mecánicas de exploración espacial",
      technologies: ["Unity", "C#", "Photoshop"],
      link: "#",
      github: "#"
    },
    {
      title: "Hackathon - EcoTracker",
      description: "Aplicación para tracking de huella de carbono desarrollada en un hackathon de sostenibilidad",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      link: "#",
      github: "#"
    }
  ];

  const learningProjects = [
    {
      title: "Clone de Netflix",
      description: "Recreación de la interfaz de Netflix para practicar React y consumo de APIs",
      technologies: ["React", "TMDB API", "CSS Modules"],
      link: "#",
      github: "#"
    },
    {
      title: "Todo App con TypeScript",
      description: "Aplicación de tareas para aprender TypeScript y testing con Jest",
      technologies: ["TypeScript", "React", "Jest"],
      link: "#",
      github: "#"
    },
    {
      title: "API REST con Node.js",
      description: "Backend completo con autenticación JWT para practicar desarrollo de APIs",
      technologies: ["Node.js", "Express", "JWT", "MongoDB"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <div className="App">
      <Header />
      <About />
      <ProjectsToggle 
        mainProjects={mainProjects}
        jamProjects={jamProjects}
        learningProjects={learningProjects}
      />
      <Contact />
    </div>
  );
}

export default App;