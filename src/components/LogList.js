import React from 'react';

const formatDuration = (duration) => {
  const hours = Math.floor(duration);
  const minutes = Math.round((duration - hours) * 60);
  return `${hours > 0 ? `${hours} hours` : ''} ${minutes > 0 ? `${minutes} minutes` : ''}`.trim();
}

const LogList = ({ logs }) => {
  return (
    <ul>
      {logs.map((log, index) => (
        <li key={index}>{`${log.date}: ${formatDuration(log.duration)}`}</li>
      ))}
    </ul>
  );
}

export default LogList;
