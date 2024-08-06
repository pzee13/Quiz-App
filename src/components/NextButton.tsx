import React from 'react';

interface NextButtonProps {
  handleNextQuestion: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ handleNextQuestion }) => {
  return (
    <button
      onClick={handleNextQuestion}
      className="bg-green-500 text-white px-4 py-2 rounded mt-2"
    >
      Next
    </button>
  );
};

export default NextButton;
