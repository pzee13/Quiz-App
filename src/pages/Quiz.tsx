// src/components/Quiz.tsx

import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import UserProfile from './Profile';
import { setCurrentQuestionIndex, setScore, setTimer, resetQuiz } from '../slice/quizSlice';
import {
  Score,
  Timer,
  Question,
  Answers,
  NextButton,
  PlayButton,
  Anime1,
} from './index';

const Quiz: React.FC = () => {
  const dispatch = useDispatch();
  const { score, currentQuestionIndex, timer, questions } = useSelector(
    (state: RootState) => state.quiz
  );

  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [canMoveToNext, setCanMoveToNext] = useState(false); // For controlling Next button

  const question = questions[currentQuestionIndex];

  const handleStart = () => {
    setIsQuizStarted(true);
    setIsTimeUp(false);
    setCanMoveToNext(false);
    dispatch(setTimer(5)); // Start with a timer
  };

  const handleNextQuestion = useCallback(() => {
    if (!canMoveToNext) return; // Prevent moving to next if not allowed

    // Only increase score if correct answer after time's up
    if (question && selectedAnswer === question.answer) {
      dispatch(setScore(score + 1));
    }

    // Reset for the next question
    setSelectedAnswer(null);
    setIsTimeUp(false);
    setCanMoveToNext(false);
    dispatch(setTimer(5)); // Reset timer for the next question

    if (currentQuestionIndex + 1 >= questions.length) {
      dispatch(setCurrentQuestionIndex(questions.length)); // End the quiz
    } else {
      dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
    }
  }, [dispatch, currentQuestionIndex, questions.length, question, selectedAnswer, score, canMoveToNext]);

  useEffect(() => {
    if (!isQuizStarted) return;

    if (timer === 0) {
      setIsTimeUp(true);

      // Automatically evaluate selected answer after time's up
      if (selectedAnswer !== null) {
        setTimeout(() => {
          setCanMoveToNext(true);
        }, 5000); // Wait 5 seconds before allowing to move to the next question
      }
      return;
    }

    const interval = setInterval(() => {
      dispatch(setTimer(timer - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, dispatch, isQuizStarted, selectedAnswer]);

  const handleAnswerChange = (option: string) => {
    if (!isTimeUp) {
      setSelectedAnswer(option);
    }
  };

  const isQuizEnded = currentQuestionIndex >= questions.length;

  return (
    <section className="relative h-screen px-4 py-12 bg-primaryBlack flex items-center">
      {/* Wrapper for UserProfile to position it */}
      <div className="absolute top-4 right-4">
        <UserProfile />
      </div>
      <div className="flex flex-col max-w-4xl mx-auto space-y-4">
        <div className="flex flex-row space-x-12">
          <div className="flex-1 flex flex-col items-start">
            <div className="text-left">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">Quiz</p>
              <h1 className="mt-4 text-4xl font-bold text-white">Test Your Knowledge</h1>
              <p className="mt-4 text-lg text-gray-200">
                Answer the questions below to see how well you know your stuff!
              </p>
            </div>
            <div className="w-24 h-24">
              <img src={Anime1} alt="Animated Icon" className="w-full h-full object-cover" />
            </div>
            {isQuizEnded && <Score score={score} />}
          </div>
          <div className="flex-1 flex items-center space-y-8">
            {!isQuizStarted ? (
              <PlayButton handleStart={handleStart} />
            ) : (
              <>
                {isQuizEnded ? (
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-black">Final Score: {score}</h2>
                    <button
                      onClick={() => dispatch(resetQuiz())}
                      className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                    >
                      Play Again
                    </button>
                  </div>
                ) : (
                  <>
                    {question ? (
                      <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-blur transition-transform duration-500 ease-in-out">
                          {/* Blur effect card */}
                        </div>
                        <div className="relative bg-black shadow-md border border-gray-200 rounded-lg overflow-hidden transition-transform duration-500 ease-in-out">
                          <div className="p-8">
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
                            <div className="mt-6 flex items-center justify-between">
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
