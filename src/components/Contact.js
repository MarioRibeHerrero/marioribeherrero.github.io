import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <p>
            I'm always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to say hello, 
            I'd love to hear from you.
          </p>
          <div className="contact-methods">
            <a href="mailto:your.email@example.com" className="contact-method">
              <h4>Email</h4>
              <p>your.email@example.com</p>
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="contact-method" target="_blank" rel="noopener noreferrer">
              <h4>LinkedIn</h4>
              <p>Connect with me</p>
            </a>
            <a href="https://github.com/yourusername" className="contact-method" target="_blank" rel="noopener noreferrer">
              <h4>GitHub</h4>
              <p>View my code</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;