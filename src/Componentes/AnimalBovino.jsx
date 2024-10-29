/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../css/style.css'; 

const AnimalBovino = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    raza: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Datos enviados:', formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <input
        type="number"
        name="edad"
        value={formData.edad}
        onChange={handleChange}
        placeholder="Edad"
      />
      <input
        type="text"
        name="raza"
        value={formData.raza}
        onChange={handleChange}
        placeholder="Raza"
      />
      <button type="submit">Enviar</button>
    </form>
    </div>
    </>
  );
};

export default AnimalBovino;
