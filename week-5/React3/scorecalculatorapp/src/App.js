import React from 'react';
import CalculateScore from './Components/CalculateScore';
import './App.css';

function App() {
  return (
    <div className="App">
      <CalculateScore 
        Name="John Doe" 
        School="XYZ International School" 
        Total={425} 
        Goal={450} 
      />
    </div>
  );
}

export default App;
