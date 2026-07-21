import React from 'react';
import './App.css';

function App() {
  const officeSpaces = [
    { name: "DBS", rent: 50000, address: "Chennai" },
    { name: "DLF", rent: 75000, address: "Chennai" },
    { name: "TIDEL", rent: 40000, address: "Chennai" },
    { name: "Ramanujan IT City", rent: 90000, address: "Chennai" }
  ];

  return (
    <div className="App" style={{ padding: '20px', textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Office Space Rental</h1>
      
      {/* Attribute to display the image of the office space */}
      <img 
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" 
        alt="Office Space" 
        style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }}
      />
      
      <h2>Available Spaces:</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {officeSpaces.map((space, index) => {
          // Inline CSS condition
          const rentStyle = {
            color: space.rent < 60000 ? 'red' : 'green',
            fontWeight: 'bold'
          };
          
          return (
            <li key={index} style={{ border: '1px solid #ddd', margin: '10px 0', padding: '15px', borderRadius: '5px' }}>
              <h3>Name: {space.name}</h3>
              <p>Rent: <span style={rentStyle}>Rs. {space.rent}</span></p>
              <p>Address: {space.address}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
