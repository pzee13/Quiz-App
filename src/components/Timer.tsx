import React from 'react';

interface TimerProps {
  timer: number;
}

const Timer: React.FC<TimerProps> = ({ timer }) => {
  return <div className="mb-4">Timer: {timer}s</div>;
};

export default Timer;
