import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [status, setStatus] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h2>Bài 3 - Alert Styles theo State</h2>
      
      <Alert type={status} />

      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <button onClick={() => setStatus('success')}>Success</button>
        <button onClick={() => setStatus('warning')}>Warning</button>
        <button onClick={() => setStatus('error')}>Error</button>
      </div>
    </div>
  );
}

export default App;