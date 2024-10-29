import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from './Componentes/Contacto';
import inicioSesion from './Componentes/inicioSesion';
import Conocenos from './Componentes/Conocenos';

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path="/InicioSesion" exact component={inicioSesion} />
      <Route path="/Conocenos" component={Conocenos} />
      <Route path="/contacto" component={Contacto} />
    </Routes>
  </BrowserRouter>
);

export default routes;