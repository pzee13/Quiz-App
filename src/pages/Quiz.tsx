import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { setCurrentQuestionIndex, setScore, setTimer, resetQuiz } from '../slice/quizSlice';
import UserProfile from './Profile';

const Quiz: React.FC = () => {
  const dispatch = useDispatch();
  const { score, currentQuestionIndex, timer, questions } = useSelector((state: RootState) => state.quiz);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [showTimeUpModal, setShowTimeUpModal] = useState(false);

  // Check if the current question is valid
  const question = questions[currentQuestionIndex];

  const handleStart = () => {
    setIsQuizStarted(true);
    setIsTimeUp(false);
    setShowTimeUpModal(false);
    dispatch(setTimer(5)); // Start with a timer
  };

  const handleNextQuestion = useCallback(() => {
    if (isTimeUp) {
      setSelectedAnswer(null); // Reset selected answer
    }

    // If no answer was selected and time is up, score remains unchanged
    if (isTimeUp && selectedAnswer === null) {
      // No score increment
    } else if (question && selectedAnswer === question.answer) {
      dispatch(setScore(score + 1)); // Increase score if correct answer
    }

    // Reset for the next question
    setSelectedAnswer(null);
    setIsTimeUp(false);
    dispatch(setTimer(5)); // Reset timer for the next question

    if (currentQuestionIndex + 1 >= questions.length) {
      dispatch(setCurrentQuestionIndex(questions.length)); // End the quiz
    } else {
      dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
    }
  }, [dispatch, currentQuestionIndex, questions.length, question, selectedAnswer, score, isTimeUp]);

  useEffect(() => {
    if (!isQuizStarted) return;

    if (timer === 0) {
      setIsTimeUp(true);
      setShowTimeUpModal(true);
      setTimeout(() => setShowTimeUpModal(false), 3000); // Hide modal after 3 seconds
      return;
    }

    const interval = setInterval(() => {
      dispatch(setTimer(timer - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, dispatch, isQuizStarted]);

  const handleAnswerChange = (option: string) => {
    if (!isTimeUp) {
      setSelectedAnswer(option);
    }
  };

  // Check if the quiz has ended
  const isQuizEnded = currentQuestionIndex >= questions.length;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Quiz</h1>
        <UserProfile />
      </div>
      {!isQuizStarted ? (
        <button
          onClick={handleStart}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Start Quiz
        </button>
      ) : (
        <>
          {isQuizEnded ? (
            <div className="mt-4">
              <h2 className="text-xl font-bold">Final Score: {score}</h2>
              <button
                onClick={() => dispatch(resetQuiz())}
                className="bg-green-500 text-white px-4 py-2 rounded mt-2"
              >
                Play Again
              </button>
            </div>
          ) : (
            <>
              <p className="text-xl mb-4">Score: {score}</p>
              {question ? (
                <>
                  <p className="text-lg mb-4">Question: {question.question}</p>
                  <div className="mb-4">Timer: {timer}s</div>
                  <div className="space-y-2">
                    {question.options.map((option) => (
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
                  <button
                    onClick={handleNextQuestion}
                    className="bg-green-500 text-white px-4 py-2 rounded mt-2"
                  >
                    Next
                  </button>
                </>
              ) : null}
            </>
          )}
        </>
      )}
      {showTimeUpModal && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
          <p>Time's up!</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
