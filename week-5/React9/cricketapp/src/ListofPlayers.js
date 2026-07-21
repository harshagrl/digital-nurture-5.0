import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Sachin Tendulkar", score: 100 },
    { name: "MS Dhoni", score: 95 },
    { name: "Virat Kohli", score: 110 },
    { name: "Rohit Sharma", score: 85 },
    { name: "Yuvraj Singh", score: 60 },
    { name: "Suresh Raina", score: 45 },
    { name: "Ravindra Jadeja", score: 55 },
    { name: "R Ashwin", score: 30 },
    { name: "Zaheer Khan", score: 10 },
    { name: "Harbhajan Singh", score: 25 },
    { name: "Virender Sehwag", score: 120 }
  ];

  // Filter the players with scores below 70 using arrow functions
  const playersBelow70 = players.filter(player => player.score < 70);

  return (
    <div style={{ textAlign: 'left', padding: '20px' }}>
      <h2>All Players (using map)</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>Mr. {player.name} - Score: {player.score}</li>
        ))}
      </ul>

      <h2>Players with Score Below 70 (using filter)</h2>
      <ul>
        {playersBelow70.map((player, index) => (
          <li key={index}>Mr. {player.name} - Score: {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
