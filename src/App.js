import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useWOW from './useWOW';
import './normalize.css';
import './index.css';

export default function App() {
  useWOW();
  return (
    <div className="container-fluid bg-myPortfolio">
      <Home />
      <About />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
