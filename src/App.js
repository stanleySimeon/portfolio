import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import './normalize.css';
import './index.css';

export default function App() {
  return (
    <div className="container-fluid relative bg-myPortfolio">
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Testimonial />
    </div>
  );
}
