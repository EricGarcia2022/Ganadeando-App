import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import '../App.css';
import '../css/style.css';

import Pie from '../Componentes/Pie';
import Encabezado from '../Componentes/Encabezado';
import InicioSesion from '../Componentes/Home';
import Registro from '../Componentes/Registro';
import AnimalBovinos from '../Componentes/AnimalBovino';
import Contacto from '../Componentes/Contacto';
import Conocenos from '../Componentes/Conocenos';

export const GlobalRouter = ({ handlerAddProductCart, handlerDeleteProductCart, cartItems }) => {
    return (
        <Routes>
            <Route path="/" element={<InicioSesion />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/animal-bovinos" element={<AnimalBovinos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/conocenos" element={<Conocenos />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Redirecciona a InicioSesion si la ruta no existe */}
        </Routes>
    );
}