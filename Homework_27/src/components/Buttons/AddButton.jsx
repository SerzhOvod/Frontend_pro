import React, { Component } from 'react';

function AddButton({ onClick, type = 'submit', className = 'form__btn' }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      Додати
    </button>
  );
}

export default AddButton;
