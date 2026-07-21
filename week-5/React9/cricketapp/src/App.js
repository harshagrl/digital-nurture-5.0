import React, { useState } from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';
import './App.css';

function App() {
  const [flag, setFlag] = useState(true);

  let componentToRender;
  if (flag) {
    componentToRender = <ListofPlayers />;
  } else {
    componentToRender = <IndianPlayers />;
  }

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Cricket App</h1>
      <button 
        onClick={() => setFlag(!flag)} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginBottom: '20px' }}>
        Toggle Flag (Currently: {flag.toString()})
      </button>
      <hr />
      
      {componentToRender}
    </div>
  );
}

export default App;
