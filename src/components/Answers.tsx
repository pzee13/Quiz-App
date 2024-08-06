import React from 'react';

interface AnswersProps {
  options: string[];
  selectedAnswer: string | null;
  handleAnswerChange: (option: string) => void;
  isTimeUp: boolean;
}

const Answers: React.FC<AnswersProps> = ({ options, selectedAnswer, handleAnswerChange, isTimeUp }) => {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleAnswerChange(option)}
          className={`bg-blue-500 text-white px-4 py-2 rounded ${selectedAnswer === option ? 'bg-blue-700' : ''}`}
          disabled={isTimeUp} // Disable answer buttons when time is up
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Answers;
