import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      width: '100vw',
      backgroundColor: '#f8f9fa' 
    }}>
      
      {/* Nút login nằm chính giữa màn hình để mở form */}
      <button 
        style={{ 
          padding: '12px 24px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
        onClick={() => setIsModalOpen(true)}
      >
        Login
      </button>

      {}
      <LoginForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
    </div>
  );
}

export default App;