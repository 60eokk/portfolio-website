import React from 'react';
import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  
  const projects = [
    { id: 1, name: 'Project 1', description: 'Description of Project 1' },
    { id: 2, name: 'Project 2', description: 'Description of Project 2' },
    { id: 3, name: 'Project 3', description: 'Description of Project 3' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  return (
    <div className='App'>
      <header className='App-header' style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <h1 className>'Welcome to my Portfolio Page'</h1>
      </header>

      <section className='about-me'>
        <h2>About Me</h2>
        <p className={`slide-in ${isVisible ? 'visible' : ''}`}>
          Here's a brief introduction about myself and my skills.
        </p>
      </section>

      <section className='projects'>
        <h2> Projects</h2>
        <div className='projects-list'>
          <h3>{projects[currentProject].name}</h3>
          <p>{projects[currentProject].description}</p>
          <button onClick={nextProject}>Next Project</button>
        </div>
      </section>
    </div>
  );
}


export default App;
