import React from 'react';
import './Alert.css';

function Alert({ type }) {
  if (!type) return null;

  const className = `alert-box alert-${type}`;

  return (
    <div className={className}>
      This is a {type} message!
    </div>
  );
}

export default Alert;