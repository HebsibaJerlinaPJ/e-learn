import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero-container" style={{ 
  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/learning-illustration.png') center/cover no-repeat`
}}>
      <div className="hero-content">
        <h1>Learn New Skills Online</h1>
        <p>Find the perfect course for your career growth</p>
        <button className="hero-btn">Browse Courses</button>
      </div>
    </div>
  );
};

export default Hero;