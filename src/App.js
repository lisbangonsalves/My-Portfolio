import React from 'react';
import Home from './components/Home'
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Work/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
