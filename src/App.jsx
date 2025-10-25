import React from 'react';
import { useState,useEffect } from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Project.jsx';
import Skills from  './components/Skills.jsx'
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <div className="text-white App min-h-screen bg-gray-950 font-sans">
      
      <Navbar />
      <Hero />
      <About /> 
      {/* Next sections: Skills, Contact */}
      <Skills/>
      <Projects />
      

<Contact/>
<Footer/>
    </div>
  );
}

export default App;
