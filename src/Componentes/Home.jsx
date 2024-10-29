/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import '../css/style.css';

const InicioSesion = ({ irinicioSesion }) => {
  return (
    <div className="container-form sign-up">
      <div className="welcome-back">
        <div className="message">
          <h1>Bienvenido a Ganadeando App</h1>
          <h3>Si ya tienes una cuenta, por favor inicia sesión aquí</h3>
          <button className="sign-up-btn" onClick={irinicioSesion}>
            Iniciar Sesión
          </button>
        </div>
      </div>
      <Formulario />
    </div>
  );
};

const Formulario = () => {
  return (
    <form className="formulario">
      <h2 className="create-account">Crear una cuenta</h2>
      <p className="cuenta-gratis">Crear una cuenta gratis</p>
      <Campo label="Nombre" id="Nombre" type="text" />
      <Campo label="Correo" id="email" type="email" />
      <Campo label="Contraseña" id="password" type="password" />
      <button className="sign-up-btn" type="submit">Registrarse</button> {/* Cambié onClick a type="submit" */}
    </form>
  );
};

const Campo = ({ label, id, type }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </>
  );
};

export default InicioSesion;
