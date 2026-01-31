import React from 'react';
import './Button.css';

function Button({ type, children }) {
  const className = `btn btn-${type}`;

  return (
    <button className={className}>
      {children}
    </button>
  );
}

export default Button;