import React from 'react';
import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const 

  const projects = [
    { id: 1, name: 'Project 1', description: 'Description of Project 1' },
    { id: 2, name: 'Project 2', description: 'Description of Project 2' },
    { id: 3, name: 'Project 3', description: 'Description of Project 3' },
  ];

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='Welcome to my Portfolio Page'></h1>
      </header>

      <section className='about-me'>
        <h2 About Me></h2>
        <p className='I am a SWE XXXXXXXX'></p>
      </section>

      <section className='projects'>
        <h2 Projects></h2>
        <div className='projects-list'>
          <h3>{projects[project1].name}</h3>
          <p>{projects[project1].description}</p>
          <button onClick={nextProject}>Next Project</button>
        </div>
      </section>
    </div>
  );
}


export default App;
