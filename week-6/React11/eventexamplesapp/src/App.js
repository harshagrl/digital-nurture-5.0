import React from 'react';
import Counter from './Counter';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';

function App() {
  
  // Method expecting an argument
  const sayWelcome = (message) => {
    alert(message);
  };

  // Method handling a synthetic event
  const handleSyntheticEvent = (e) => {
    // 'e' is a React SyntheticEvent wrapping the native browser event
    console.log("Synthetic Event Object:", e);
    alert("I was clicked");
  };

  return (
    <div className="App" style={{ padding: '30px', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
      <h1>React Events & Handlers Lab</h1>
      
      <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc' }}>
        <h2>App Component Events</h2>
        
        {/* Pass an argument to an event handler using an arrow function */}
        <button 
          onClick={() => sayWelcome("Welcome")} 
          style={{ marginRight: '10px', padding: '8px' }}
        >
          Say Welcome
        </button>
        
        {/* Pass the synthetic event directly */}
        <button 
          onClick={handleSyntheticEvent}
          style={{ padding: '8px' }}
        >
          Test Synthetic Event (OnPress)
        </button>
      </div>

      {/* Render the Counter component */}
      <Counter />
      
      {/* Render the Currency Convertor component */}
      <CurrencyConvertor />
    </div>
  );
}

export default App;
