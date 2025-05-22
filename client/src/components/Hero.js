import React from 'react';

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: "url('/hero.jpg')" }}>
      <div className="hero-content">
        <p className="hero-tagline">Enjoy smooth learning</p>
        <h1 className="hero-title">BEST EDUCATION TEMPLATE EVER!</h1>
        <div className="hero-buttons">
          <button className="hero-btn primary">Learn More</button>
          <button className="hero-btn secondary">Our Courses</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;