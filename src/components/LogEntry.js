import React, { useState } from 'react';

const LogEntry = ({ onAdd }) => {
  const [duration, setDuration] = useState(''); // For custom hours
  const [minutes, setMinutes] = useState('0'); // For fixed interval minutes

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalDuration = parseFloat(duration || 0) + parseFloat(minutes) / 60;
    onAdd({ date: new Date().toLocaleDateString(), duration: totalDuration });
    setDuration('');
    setMinutes('0');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Enter Duration (hours):
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Hours"
          />
        </label>
      </div>
      <div>
        <label>
          And/Or select minutes:
          <select value={minutes} onChange={(e) => setMinutes(e.target.value)}>
            <option value="0">0 minutes</option>
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="45">45 minutes</option>
          </select>
        </label>
      </div>
      <button type="submit">Add Log</button>
    </form>
  );
}

export default LogEntry;
