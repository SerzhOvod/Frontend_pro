import React, { Component } from 'react';

function DeleteButton({ text, onClick, className, id }) {
  return (
    <button className={className} onClick={() => onClick(id)}>
      {text}
    </button>
  );
}

export default DeleteButton;
