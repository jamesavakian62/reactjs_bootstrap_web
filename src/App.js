import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import Navbar from './Components/Navbar';
import {Route, Switch} from 'react-router-dom';

import {BrowserRouter as Router} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import { Routes } from 'react-router-dom';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      
     
      <Routes>
    
        <Route exact path="/" element={<Home />} />
        
        <Route exact path="/about" element={<About />} />
       
        <Route exact path="/contact" element={<Contact/>} />
       
        <Route exact path="/services" element={<Services />} />

      </Routes>
    
    <Footer/>
    </div>
  )
}

export default App;
