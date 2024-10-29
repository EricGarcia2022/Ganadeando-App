/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; // Puedes usar CSS para estilizar el menú

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h6>Ganadeando App</h6>
            </div>
            <ul className="nav-links">
                <img src="/public/logo-Ganadeando-app.ico" alt="" width={'40px'} height={'40px'}/>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
                <li><Link to="/Registro">Registrarse</Link></li>
                <li><Link to="/AnimalManagement">Gestión de Ganado</Link></li>
                <li><Link to="/ProductionControl">Control de Producción</Link></li>
                <li><Link to="./MedicalHistory.jsx">Historial Médico</Link></li>
                <li><Link to="./Reports.jsx">Informes</Link></li>
                
            </ul>
        </nav>
    );
};

export default Navbar;
