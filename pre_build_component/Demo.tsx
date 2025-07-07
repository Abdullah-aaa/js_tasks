'use client';
import React, { useState } from 'react';

function DecimalToBinaryConverter() {
  const [decimal, setDecimal] = useState('');
  const [binary, setBinary] = useState('');

  const handleConvert = () => {
    const decimalValue = parseInt(decimal, 10);
    if (!isNaN(decimalValue)) {
      setBinary(decimalValue.toString(2));
    } else {
      setBinary('Invalid Input');
    }
  };

  return (
    <div>
      <h1>Decimal to Binary Converter</h1>
      <input
        type="text"
        placeholder="Enter a decimal number"
        value={decimal}
        onChange={(e) => setDecimal(e.target.value)}
      />
      <button onClick={handleConvert}>Convert</button>
      <p>Binary: {binary}</p>
    </div>
  );
}

export default DecimalToBinaryConverter;
