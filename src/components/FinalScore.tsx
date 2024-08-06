import React from 'react';

interface ScoreProps {
  score: number;
}

const Score: React.FC<ScoreProps> = ({ score }) => {
  return <p className="text-xl mb-4">Score: {score}</p>;
};

export default Score;
