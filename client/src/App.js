import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import Testimonials from './components/Testimonials';
import './App.css';

const App = () => {
  // Static course data (to be replaced with API data later)
  const courses = [
    {
      id: 1,
      title: 'Figuring out how to composer as an expert',
      instructor: 'Elijah Lions',
      category: 'Business',
      price: 35.00,
      rating: 5.0,
      lessons: 10,
      students: 23,
    },
    {
      id: 2,
      title: 'Configuration for communication instruments',
      instructor: 'Georgia Train',
      category: 'Design',
      price: 35.00,
      rating: 4.0,
      lessons: 9,
      students: 15,
    },
    {
      id: 3,
      title: 'Introduction to community training',
      instructor: 'Christian Hope',
      category: 'Network',
      price: 99.00,
      rating: 5.0,
      lessons: 20,
      students: 20,
    },
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="courses-section">
        <h2 className="section-title">Our Online Courses</h2>
        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default App;