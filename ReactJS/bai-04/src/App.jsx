import React from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f8f9fa'
  };

  return (
    <div style={centerStyle}>
      <LoginForm />
    </div>
  );
}

export default App;