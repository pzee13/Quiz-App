import React from 'react';

interface PlayButtonProps {
  handleStart: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({ handleStart }) => {
  return (
    <button
      onClick={handleStart}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Start Quiz
    </button>
  );
};

export default PlayButton;
