import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { useLocation } from 'react-router-dom';
import UserProfile from './Profile';
import { setCurrentQuestionIndex, setScore, setTimer, resetQuiz } from '../slice/quizSlice';
import { Score, Timer, Question, Answers, NextButton, PlayButton, Anime1 } from './index';

const Quiz: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();


  const { score, currentQuestionIndex, timer, questions } = useSelector(
    (state: RootState) => state.quiz
  );

  const [isQuizStarted, setIsQuizStarted] = useState<boolean>(() => {
    return localStorage.getItem('isQuizStarted') === 'true';
  });
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(() => {
    return localStorage.getItem('selectedAnswer');
  });
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [canMoveToNext, setCanMoveToNext] = useState(false);

  const question = questions[currentQuestionIndex];

  useEffect(() => {
    if (!isQuizStarted) return;

    if (timer === 0) {
      setIsTimeUp(true);

      setTimeout(() => {
        setCanMoveToNext(true);
      }, 5000);

      return;
    }

    const interval = setInterval(() => {
      dispatch(setTimer(timer - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, dispatch, isQuizStarted, selectedAnswer]);

  useEffect(() => {
    localStorage.setItem('isQuizStarted', JSON.stringify(isQuizStarted));
    localStorage.setItem('selectedAnswer', JSON.stringify(selectedAnswer));
  }, [isQuizStarted, selectedAnswer]);

  const handleStart = () => {
    setIsQuizStarted(true);
    setIsTimeUp(false);
    setCanMoveToNext(false);
    dispatch(setTimer(5));
    localStorage.setItem('isQuizStarted', 'true');
    localStorage.removeItem('selectedAnswer'); 
  };

  const handleNextQuestion = useCallback(() => {
    if (!canMoveToNext) return;

    if (question && selectedAnswer === question.answer) {
      dispatch(setScore(score + 1));
    }

    setSelectedAnswer(null);
    setIsTimeUp(false);
    setCanMoveToNext(false);
    dispatch(setTimer(5));

    if (currentQuestionIndex + 1 >= questions.length) {
      dispatch(setCurrentQuestionIndex(questions.length));
      // Clear localStorage when quiz ends
      localStorage.removeItem('isQuizStarted');
      localStorage.removeItem('selectedAnswer');
    } else {
      dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
    }
  }, [dispatch, currentQuestionIndex, questions.length, question, selectedAnswer, score, canMoveToNext]);

  const handleAnswerChange = (option: string) => {
    if (!isTimeUp) {
      setSelectedAnswer(option);
    }
  };

  const isQuizEnded = currentQuestionIndex >= questions.length;

  useEffect(() => {
    const handleRouteChange = () => {
      localStorage.clear();
    };

    return () => {
      handleRouteChange();
    };
  }, [location.pathname]);

  return (
    <section className="relative h-screen px-4 py-12 bg-primaryBlack flex items-center">
      <div className="absolute top-4 right-4">
        <UserProfile />
      </div>
      <div className="flex flex-col max-w-4xl mx-auto space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
          <div className="flex-1 flex flex-col items-center">
            <div className="text-left">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">Quiz</p>
              <h1 className="mt-4 text-2xl md:text-4xl font-bold text-white">Test Your Knowledge</h1>
              <p className="mt-4 text-base md:text-lg text-gray-200">
                Answer the questions 
              </p>
            </div>
            <div className="w-96 h-96 mt-8 md:w-32 md:h-32">
              <img src={Anime1} alt="Animated Icon" className="w-48 h-48 object-cover" />
            </div>
            {isQuizEnded && <Score score={score} />}
          </div>
          <div className="flex-1 flex md:justify-center md:mt-2 sm:mt-2 sm:justify-center space-y-8">
            {!isQuizStarted ? (
              <PlayButton handleStart={handleStart} />
            ) : (
              <>
                {isQuizEnded ? (
                  <div className="text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-black">Final Score: {score}</h2>
                    <button
                      onClick={() => {
                        dispatch(resetQuiz());
                        localStorage.removeItem('isQuizStarted');
                        localStorage.removeItem('selectedAnswer');
                      }}
                      className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                    >
                      Play Again
                    </button>
                  </div>
                ) : (
                  <>
                    {question ? (
                      <div className="relative overflow-hidden">
                        <div className="relative bg-black shadow-md border border-gray-200 rounded-lg overflow-hidden transition-transform duration-500 ease-in-out">
                          <div className="p-4 md:p-8">
                            <Question question={question.question} />
                            <Answers
                              options={question.options}
                              selectedAnswer={selectedAnswer}
                              handleAnswerChange={handleAnswerChange}
                              isTimeUp={isTimeUp}
                            />
                            <div className="mt-4 text-center">
                              {isTimeUp ? (
                                selectedAnswer === question.answer ? (
                                  <div className="text-green-500">
                                    Correct! The answer is: {question.answer}
                                  </div>
                                ) : (
                                  <div className="text-red-500">
                                    Incorrect! The correct answer is: {question.answer}
                                  </div>
                                )
                              ) : (
                                <div className="text-gray-500">
                                  Please select an answer before time runs out!
                                </div>
                              )}
                            </div>
                            <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
                              <Timer timer={timer} />
                              <NextButton handleNextQuestion={handleNextQuestion} disabled={!canMoveToNext} />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
