import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from 'react-router-dom'// Com
import Home from './components/Home';
import Projects from './Projects';
import Skills from './Skills';
import About from './components/About';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
 
    <Route index element = {<Home />} />
    <Route path ="about" element = {<About />} />
    <Route path ="project" element = {<Projects />} />
    <Route path ="skills" element = {<Skills />} />
    
    </Routes>
    </BrowserRouter>
  );
};

export default App;

