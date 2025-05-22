import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Master New Skills with Expert-Guided Learning
        </h1>
        <p className="hero-description">
          Learn at your own pace from top instructors. Gain real-world skills that help you grow, excel, and lead anywhere, anytime.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Browse All Courses</button>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="satisfied-learners">
          <span className="learner-count">10,000+</span> Satisfied Learners
        </div>
        <img src="/images/learning-illustration.png" alt="Learning Illustration" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;