// src/components/Form.jsx
import React from "react";
import InputField from "./inputField";

const Form = ({ persona, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Nombre"
        name="nombre"
        type="text"
        value={persona.nombre}
        onChange={handleInputChange}
      />
      <br />
      <InputField
        label="Apellido"
        name="apellido"
        type="text"
        value={persona.apellido}
        onChange={handleInputChange}
      />
      <br />
      <InputField
        label="Email"
        name="email"
        type="email"
        value={persona.email}
        onChange={handleInputChange}
      />
      <br />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default Form;
