import React from 'react';

interface ScoreProps {
  score: number;
}

const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <div className="text-center mb-6">
      <p className="text-xl md:text-2xl font-bold text-gray-800">Score: {score}</p>
    </div>
  );
};

export default Score;
