import React, { useState, useEffect } from 'react';
import './Spinner.css';

export const Spinner: React.FC = () => {
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDotIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="spinner">
      <div className={`dot ${activeDotIndex === 0 ? 'active' : ''}`} />
      <div className={`dot ${activeDotIndex === 1 ? 'active' : ''}`} />
      <div className={`dot ${activeDotIndex === 2 ? 'active' : ''}`} />
    </div>
  );
};