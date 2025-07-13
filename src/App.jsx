import React, { Component } from 'react';
import { Routes, Route } from 'react-router';
import './Components/Navbar.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Webdev from './components/Webdev';
import Nondev from './components/Nondev';

function App() {
  return (
    <div className="bg-[url('/neo.png')] bg-cover bg-center w-full min-h-screen">
      <Navbar /> 
      

      <div className="flex-grow content-wrap pt-[20vh]">
        <Routes>
          <Route path='/webdev' element={<Webdev />} />
          <Route path='/nondev' element={<Nondev />} />
          <Route path='/' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
