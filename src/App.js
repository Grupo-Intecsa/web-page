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

  return (
    <div className="App">
      <Navigation />
      <Header data={jsonData.Header} />
      <Features data={jsonData.Features} />
      <About data={jsonData.About} />
      <Services data={jsonData.Services} />
      <Testimonial data={jsonData.Testimonials} />
      <Contacto data={jsonData.Contact} />
    </div>
  );
}

export default App;
