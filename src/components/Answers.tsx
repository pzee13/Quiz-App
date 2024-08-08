import React from 'react';

interface AnswersProps {
  options: string[];
  selectedAnswer: string | null;
  handleAnswerChange: (option: string) => void;
  isTimeUp: boolean;
}

const Answers: React.FC<AnswersProps> = ({
  options,
  selectedAnswer,
  handleAnswerChange,
  isTimeUp,
}) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswerChange(option)}
            className={`w-36 h-16 md:w-40 md:h-20 text-center px-2 py-1 rounded text-white
                border-2
            
                hover:bg-optionColor
                hover:text-black
                focus:outline-none transition-transform duration-300 ease-in-out transform ${
              selectedAnswer === option
                ? 'bg-yellow-700 scale-105'
                : 'hover:bg-blue-600 border-yellow-200'
            }`}
            disabled={isTimeUp} 
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Answers;
