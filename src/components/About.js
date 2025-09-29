import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate developer and designer with over 5 years of experience 
              creating digital solutions that make a difference. I specialize in building 
              modern web applications, mobile apps, and crafting intuitive user experiences.
            </p>
            <p>
              My approach combines technical expertise with creative problem-solving, 
              ensuring that every project not only functions flawlessly but also 
              delivers an exceptional user experience.
            </p>
            <div className="skills">
              <h3>Skills & Technologies</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Frontend</h4>
                  <ul>
                    <li>React / Vue.js</li>
                    <li>JavaScript / TypeScript</li>
                    <li>HTML5 / CSS3</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Backend</h4>
                  <ul>
                    <li>Node.js / Express</li>
                    <li>Python / Django</li>
                    <li>MongoDB / PostgreSQL</li>
                    <li>REST APIs</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Design</h4>
                  <ul>
                    <li>Figma / Sketch</li>
                    <li>Adobe Creative Suite</li>
                    <li>UI/UX Design</li>
                    <li>Prototyping</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;