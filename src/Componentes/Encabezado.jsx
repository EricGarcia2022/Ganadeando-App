/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet';


const Encabezado = () => (
  <>
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet" />
      <link rel="icon" href="../public/logo-Ganadeando-app.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
    </Helmet>
    <header className="header">
      <nav className="nav">
        <a href="#" className="logo nav-link">
        <img src="/GanadeandoApp/public/logo-Ganadeando-app.ico" alt="Logo GanadeandoApp" />
        </a>
        <button className="nav-toggle" aria-label="Abrir menú">
          <i className="fas fa-bars"></i>
        </button>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <a href="/html/Conocenos.html" className="nav-menu-link nav-link">Conócenos</a>
          </li>
          <li className="nav-menu-item">
            <a href="/html/Contacto.html" className="nav-menu-link nav-link">Contacto</a>
          </li>
          <li className="nav-menu-item">
            <a href="/html/AnimalBovino.html" className="nav-menu-link nav-link">Animal Bovino</a>
          </li>
          <li className="nav-menu-item">
            <a href="/html/index.html" className="nav-menu-link nav-link nav-menu-link_active">Registrarse</a>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

export default Encabezado;