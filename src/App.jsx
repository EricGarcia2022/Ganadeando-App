import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import { GlobalRouter } from './Routes/GlobalRouter'; // Importa el enrutador global
import './App.css';
import '../src/css/style.css';



function App() {
  return (
    <Router>
        <Navbar /> {/* Navbar presente en todas las páginas */}
        <GlobalRouter /> {/* Usa el enrutador global */}
    </Router>
    
  );
}

export default App;
