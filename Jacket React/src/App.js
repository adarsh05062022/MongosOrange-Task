import React from 'react';
import Nav from './component/Nav';
import Cart from './component/Cart';
import './App.css';
import HeroSection from './component/Home';
import AboutAndContact from './component/AboutAndContact';

function App() {
  return (
    <div>
        <Nav  />
        <section id="hero">
            <HeroSection/>
        </section>
        <section id="products">
            <Cart />
        </section>
        <section id="about">
            <AboutAndContact/>
        </section>
    </div>
  );
}

export default App;
