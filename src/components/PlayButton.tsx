import React from 'react';

interface PlayButtonProps {
  handleStart: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({ handleStart }) => {
  return (
    <div className="text-center">
      <button
        onClick={handleStart}
        className="w-32 h-10 md:w-40 md:h-12 bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default PlayButton;
