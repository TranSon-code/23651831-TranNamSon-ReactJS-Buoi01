import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div style={{ padding: '20px', display: 'flex', gap: '10px' }}>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="success">Success</Button>
    </div>
  );
}

export default App;