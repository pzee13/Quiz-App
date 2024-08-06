import React from 'react';

interface QuestionProps {
  question: string;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
  return <p className="text-lg mb-4">Question: {question}</p>;
};

export default Question;
