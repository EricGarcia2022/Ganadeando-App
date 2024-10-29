// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../css/style.css'; // Asegúrate de tener los estilos aquí

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Formulario enviado:', formData);
    // Resetea el formulario si es necesario
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div>
    
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__container">
          <h2 className="form__title">Contáctame</h2>
          <img src="/public/Consultar AB.png" alt="Consultar" width="200px" height="150px" />
          <input
            type="text"
            name="nombre"
            className="form__input"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            className="form__input"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="mensaje"
            className="form__input form__input--message"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
          />
          <input type="submit" value="Enviar" className="form__cta" />
        </div>
      </form>
     
    </div>
  );
};

export default Contacto;
