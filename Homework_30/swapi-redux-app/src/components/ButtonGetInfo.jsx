import React from 'react';

export default function ButtonGetInfo({ onClick, disabled }) {
  return (
    <button className="btn-get-info" onClick={onClick} disabled={disabled}>
      {disabled ? 'Loading...' : 'Get info'}
    </button>
  );
}
