import React, { useEffect } from 'react';
import { useQuiz } from '../context/UseQuiz';

const Quiz: React.FC = () => {
  const { score, currentQuestionIndex, timer, setScore, setCurrentQuestionIndex, setTimer, questions } = useQuiz();
  
  const question = questions[currentQuestionIndex];

  useEffect(() => {
    if (timer === 0) {
      handleNextQuestion();
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleAnswer = (option: string) => {
    if (option === question.answer) {
      setScore((prev) => prev + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    setTimer(5);
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz</h1>
      <p className="text-xl mb-4">Score: {score}</p>
      <p className="text-lg mb-4">Question: {question.question}</p>
      <div className="mb-4">Timer: {timer}s</div>
      <div className="space-y-2">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {option}
          </button>
        ))}
      </div>
      {currentQuestionIndex === questions.length - 1 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Final Score: {score}</h2>
          <button
            onClick={() => {
              setCurrentQuestionIndex(0);
              setScore(0);
              setTimer(5);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded mt-2"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
