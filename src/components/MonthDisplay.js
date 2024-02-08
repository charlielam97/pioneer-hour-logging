import React from 'react';

const MonthDisplay = ({ logs }) => {
  const totalHours = logs.reduce((acc, log) => acc + log.duration, 0);

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  return (
    <div className="month-display">
      <h2>{currentMonth}</h2>
      <p>Total Hours: {totalHours}</p>
    </div>
  );
}

export default MonthDisplay;
