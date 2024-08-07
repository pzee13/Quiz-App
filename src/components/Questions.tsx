import React from 'react';

interface QuestionProps {
  question: string;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
  return (
    <div className="w-96 h-24 flex items-center justify-center bg-gray-900 mb-10 border border-gray-300 rounded-md p-4 overflow-hidden text-lg font-medium text-white">
      <p className="text-center whitespace-normal break-words">{question}</p>
    </div>
  );
};

export default Question;
