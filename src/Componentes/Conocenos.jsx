/* eslint-disable no-unused-vars */
// src/components/Conocenos.jsx
import React, { useState } from 'react';
import Slide from './Slide';
import NavigationDots from './NavigationDots';
import '../css/style.css'; // Asegúrate de tener un archivo CSS para los estilos

<form></form>
const Conocenos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: '/public/carrusel 1.jpg',
      title: 'Nutrición Bovina',
      description: 'La aplicación Web permite llevar un control en la alimentación en los bovinos, permitiendo tener una trazabilidad de la alimentación diaria.',
    },
    {
      img: '/public/carrusel 2.jpg',
      title: 'Vacunación',
      description: 'Llevar control en la vacunación ayuda en gran medida a reducir enfermedades y la mortalidad animal.',
    },
    {
      img: '/public/Nacimientos.png',
      title: 'Nacimientos',
      description: 'Llevar el control de los nuevos nacimientos permite un mayor desarrollo para nuestros finqueros.',
    },
    {
      img: '/public/Ordeño.png',
      title: 'Producción láctea',
      description: 'Registrar la producción láctea de tu ganado te permite calcular de manera eficaz el punto de equilibrio para que tu finca sea autosostenible y altamente productiva.',
    },
  ];

  const plusSlides = (n) => {
    setCurrentSlide((prevSlide) => (prevSlide + n + slides.length) % slides.length);
  };

  const setSlide = (index) => {
    setCurrentSlide(index);
  };

  return (

    <div>
      
      <div className="container">
        <Slide
          img={slides[currentSlide].img}
          title={slides[currentSlide].title}
          description={slides[currentSlide].description}
        />
        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
        <NavigationDots slides={slides} currentSlide={currentSlide} setSlide={setSlide} />
      </div>
     
    </div>
  );
};

export default Conocenos;
