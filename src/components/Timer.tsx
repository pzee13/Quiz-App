// src/components/Timer.tsx
import React from 'react';

interface TimerProps {
  timer: number;
}

const Timer: React.FC<TimerProps> = ({ timer }) => {
  return (
    <div className="text-xl font-semibold text-white">
      Time Left: <span className='text-2xl font-bold text-red-500'>{timer}</span> seconds
    </div>
  );
};

export default Timer;
