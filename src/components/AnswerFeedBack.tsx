import React from 'react';

interface AnswerFeedbackProps {
  selectedAnswer: string | null;
  correctAnswer: string;
  isTimeUp: boolean;
}

const AnswerFeedback: React.FC<AnswerFeedbackProps> = ({ selectedAnswer, correctAnswer, isTimeUp }) => {
  return (
    <div className="mt-4 text-center">
      {isTimeUp ? (
        selectedAnswer === null ? (
          <div className="text-yellow-500">
            Oops! Time's out. Answer is: {correctAnswer}
          </div>
        ) : selectedAnswer === correctAnswer ? (
          <div className="text-green-500">Correct! The answer is: {correctAnswer}</div>
        ) : (
          <div className="text-red-500">Incorrect! The correct answer is: {correctAnswer}</div>
        )
      ) : (
        <div className="text-gray-500">Please select an answer before time runs out!</div>
      )}
    </div>
  );
};

export default AnswerFeedback;
