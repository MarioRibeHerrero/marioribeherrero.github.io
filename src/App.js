import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import ProjectSection from './components/ProjectSection';
import Contact from './components/Contact';

function App() {
  const webProjects = [
    {
      title: "E-commerce Platform",
      description: "Modern React-based shopping platform with payment integration",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      link: "#",
      github: "#"
    }
  ];

  const mobileProjects = [
    {
      title: "Fitness Tracker",
      description: "Cross-platform mobile app for tracking workouts and nutrition",
      technologies: ["React Native", "SQLite", "Redux"],
      link: "#",
      github: "#"
    }
  ];

  const designProjects = [
    {
      title: "Brand Identity System",
      description: "Complete visual identity for a tech startup",
      technologies: ["Figma", "Illustrator", "Photoshop"],
      link: "#"
    },
    {
      title: "UI/UX Case Study",
      description: "Redesign of a banking mobile application",
      technologies: ["Sketch", "Principle", "InVision"],
      link: "#"
    }
  ];

  return (
    <div className="App">
      <Header />
      <About />
      <ProjectSection 
        title="Web Development" 
        projects={webProjects}
        id="web"
      />
      <ProjectSection 
        title="Mobile Development" 
        projects={mobileProjects}
        id="mobile"
      />
      <ProjectSection 
        title="Design" 
        projects={designProjects}
        id="design"
      />
      <Contact />
    </div>
  );
}

export default App;