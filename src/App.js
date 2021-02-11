import React, { useState } from 'react'

import './App.css';
import './index.css'

import About from './components/About'
import Contacto from './components/Contacto';
import Features from './components/Features';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Services from './components/Services';
import Testimonial from './components/Testimonial';


import jsonData from './data/data.json'

function App() {

  const [ data, setData ] =useState(jsonData)

  console.log(setData, jsonData)

  return (
    <div className="App">
      <Navigation />
      <Header data={data.Header} />
      <Features data={data.Features} />
      <About data={data.About} />
      <Services data={data.Services} />
      <Testimonial data={data.Testimonials} />
      <Contacto data={data.Contact} />
    </div>
  );
}

export default App;
