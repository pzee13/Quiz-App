// NextButton.tsx

import React from 'react';

interface NextButtonProps {
  handleNextQuestion: () => void;
  disabled: boolean;
}

const NextButton: React.FC<NextButtonProps> = ({ handleNextQuestion, disabled }) => {
  return (
    <button
      onClick={handleNextQuestion}
      disabled={disabled}
      className={`mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      Next Question
    </button>
  );
};

export default NextButton;
