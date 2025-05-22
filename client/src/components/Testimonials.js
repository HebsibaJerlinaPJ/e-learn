import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carla Jennings',
      course: 'Data Science Bootcamp',
      rating: 5,
      comment: 'The courses are well-structured and the instructors are very knowledgeable. Highly recommend!',
      img: 'testimonial1.jpg',
    },
    {
      name: 'Rajesh Kumar',
      course: 'Web Development',
      rating: 5,
      comment: 'LearnTech helped me switch careers smoothly. The projects were practical and insightful.',
      img: 'testimonial2.jpg',
    },
    {
      name: 'Sarah Lee',
      course: 'MERN Stack',
      rating: 5,
      comment: 'The courses are well-structured and the instructors are very knowledgeable. Highly recommend!',
      img: 'testimonial3.jpg',
    },
  ];

  return (
    <div className="testimonials-section">
      <h2 className="section-title">What Our Students Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={`/${testimonial.img}`} alt={testimonial.name} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-course">{testimonial.course}</p>
            <div className="testimonial-rating">{'⭐'.repeat(testimonial.rating)}</div>
            <p className="testimonial-comment">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;