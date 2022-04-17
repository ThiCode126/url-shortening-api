import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Shorten from './components/Shorten';
import Statistics from './components/Statistics';

function App() {

  /**
   * ? Structure
   * ** Header (nav) + menu responsive
   * ** Hero
   * ** Form + display result
   * * Section "Advanced Statistics"
   * * Section "Boost"
   * * Header
   */

  return (
    <div id="app-container">
      <Header />
      <Hero />
      <Shorten />
      <Statistics />
    </div>
  );
}

export default App;
