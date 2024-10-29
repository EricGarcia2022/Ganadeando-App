/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ProductionForm = ({ onSubmit }) => {
  const [type, setType] = useState('leche');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type, amount, date });
    setType('leche');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="leche">Leche</option>
        <option value="carne">Carne</option>
        <option value="carne">Nacimientos</option>
      </select>
      <input type="number" placeholder="Cantidad" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <button type="submit">Registrar Producción</button>
    </form>

    
  );
};

export default ProductionForm;