// src/components/Landing.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Landing: React.FC = () => {
 

 
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate('/quiz');
  };

  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 overflow-hidden">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Quiz App</h1>
      <button
        onClick={handlePlay}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Play
      </button>

    </div>
  );
};

export default Landing;
