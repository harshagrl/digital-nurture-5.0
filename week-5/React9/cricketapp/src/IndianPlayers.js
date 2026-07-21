import React from 'react';

const IndianPlayers = () => {
  const indianTeam = ["Sachin", "Dhoni", "Virat", "Rohit", "Yuvraj", "Raina"];
  
  // Display the Odd Team Player and Even Team players using Destructuring
  const [odd1, even1, odd2, even2, odd3, even3] = indianTeam;

  const T20Players = ['Hardik Pandya', 'Jasprit Bumrah', 'Rishabh Pant'];
  const RanjiTrophyPlayers = ['Cheteshwar Pujara', 'Ajinkya Rahane', 'Mayank Agarwal'];
  
  // Merge the two arrays using the ES6 Spread Operator feature
  const mergedPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div style={{ textAlign: 'left', padding: '20px' }}>
      <h2>Indian Team Players (Destructuring)</h2>
      <div>
        <p><strong>Odd Team Players:</strong> {odd1}, {odd2}, {odd3}</p>
        <p><strong>Even Team Players:</strong> {even1}, {even2}, {even3}</p>
      </div>

      <h2>Merged T20 and Ranji Players (Spread Operator)</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
