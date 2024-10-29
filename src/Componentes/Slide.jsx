// src/components/Slide.jsx
import React from 'react';

const Slide = ({ img, title, description }) => {
  return (
    <div className="mySlides">
      <img src={img} alt={title} width="800px" height="400px" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Slide;
