import React, { useState } from 'react';

export function Input({ objectChunk, handleChange }) {
  // const [field, setField] = useState({});

  // const handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   setField((prev) => ({ ...prev, [name]: value }));
  // };
  const printInput = objectChunk.map(({ name, type, value }, index) => {
    return (
      <div key={index}>
        <label>{name}</label>
        <input type={type} value={value || ''} onChange={handleChange}></input>
      </div>
    );
  });

  return <>{printInput}</>;
}
