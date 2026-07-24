import React, { useState } from 'react';
import './App.css';

// Guest Component
function GuestPage() {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h2>Welcome Guest!</h2>
      <p>Here are the available flights:</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>✈️ Flight 101 - New York to London</li>
        <li>✈️ Flight 202 - Paris to Dubai</li>
        <li>✈️ Flight 303 - Tokyo to Sydney</li>
      </ul>
      <p style={{ color: 'red', fontWeight: 'bold' }}>Please Login to Book Tickets!</p>
    </div>
  );
}

// Logged-in User Component
function UserPage() {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h2>Welcome User!</h2>
      <p>You can now book your tickets.</p>
      <button style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}>
        Book Flight 101
      </button>
      <button style={{ padding: '10px', backgroundColor: 'green', color: 'white', marginLeft: '10px', border: 'none', borderRadius: '5px' }}>
        Book Flight 202
      </button>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App" style={{ padding: '30px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Ticket Booking App</h1>
      
      {/* Conditional Button Rendering */}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Logout
        </button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Login
        </button>
      )}

      {/* Conditional Page Rendering */}
      {isLoggedIn ? <UserPage /> : <GuestPage />}
      
    </div>
  );
}

export default App;
