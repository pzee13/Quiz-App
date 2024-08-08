import React from 'react';
import { useDispatch } from 'react-redux';
import { resetQuiz } from '../slice/quizSlice';

interface FinalScoreSectionProps {
  score: number;
}

const FinalScore: React.FC<FinalScoreSectionProps> = ({ score }) => {
  const dispatch = useDispatch();

  const handlePlayAgain = () => {
    dispatch(resetQuiz());
    localStorage.removeItem('isQuizStarted');
    localStorage.removeItem('selectedAnswer');
  };

  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-2xl font-extrabold text-white">Final Score: {score}</h2>
      <button
        onClick={handlePlayAgain}
        className="mt-4 bg-green-500 hover:bg-green-600 mt-4 text-white px-4 py-2 rounded"
      >
        Play Again
      </button>
    </div>
  );
};

export default FinalScore;
