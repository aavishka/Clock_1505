// Clock.js
import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Set an interval to update the time every second
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  // Format time as HH:MM:SS
  const formattedTime = time.toLocaleTimeString();

  return (
    <div style={{ fontSize: '2rem', fontFamily: 'Arial', textAlign: 'center' }}>
      <p>Current Time:</p>
      <p>{formattedTime}</p>
    </div>
  );
};

export default DigitalClock;
