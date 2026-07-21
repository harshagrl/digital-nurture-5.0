import React from 'react';
import '../Stylesheets/mystyle.css';

const CalculateScore = ({ Name, School, Total, Goal }) => {
  // A simple percentage/average logic assuming Total is out of 500
  const average = Total / 5; 
  return (
    <div className="score-card">
      <h2>Student Score Details</h2>
      <p><b>Name:</b> {Name}</p>
      <p><b>School:</b> {School}</p>
      <p><b>Total Score:</b> {Total}</p>
      <p><b>Goal:</b> {Goal}</p>
      <p><b>Average:</b> {average}%</p>
    </div>
  );
};

export default CalculateScore;
