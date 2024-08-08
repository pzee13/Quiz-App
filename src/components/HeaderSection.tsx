import React from 'react';
import  QuizImage  from '../assets/images/quizImage2.png';

const HeaderSection: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="text-left">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">Quiz</p>
        <h1 className="mt-4 text-2xl md:text-4xl font-bold text-white">Test Your Knowledge</h1>
        <p className="mt-4 text-base md:text-lg text-gray-200">Answer the questions</p>
      </div>
      <div className="w-96 h-96 mt-8 md:w-32 md:h-32">
        <img src={QuizImage} alt="Animated Icon" className="w-48 h-48 object-cover" />
      </div>
    </div>
  );
};

export default HeaderSection;
