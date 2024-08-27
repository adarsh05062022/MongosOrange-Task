import React from 'react';
import backgroundImage from '../assets/jacket_home.jpg'

function HeroSection() {
  return (
    <>
    

      <section 
        className="hero d-flex align-items-center justify-content-center" 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          color: '#fff',
          backgroundRepeat: 'no-repeat',
          
        }}
      >
        <div className="text-center">
          <h1 className="display-4 font-weight-bold">Find Your Perfect Jacket</h1>
          <p className="lead mb-4">Style, Comfort, and Quality in Every Stitch.</p>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
