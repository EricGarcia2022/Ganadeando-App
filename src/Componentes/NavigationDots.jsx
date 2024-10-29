/* eslint-disable react/prop-types */
// src/components/NavigationDots.jsx
import React from 'react';

const NavigationDots = ({ slides, currentSlide, setSlide }) => {
  return (
    <div className="elements">
      {slides.map((_, index) => (
        <span
          key={index}
          className={`quadrate ${index === currentSlide ? 'active' : ''}`}
          onClick={() => setSlide(index)}
        ></span>
      ))}
    </div>
  );
};

export default NavigationDots;
