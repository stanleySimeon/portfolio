import React from 'react';
import Navigation from './components/Navbar/Navigation';
import Home from './components/Home';
import './index.css';

export default function App() {
  return (
    <div className="container-fluid relative bg-myPortfolio">
      <Navigation />
      <Home />
    </div>
  );
}
