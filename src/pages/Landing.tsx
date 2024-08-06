// src/components/Landing.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserDetails } from '../slice/userSlice';


const Landing: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlay = () => {
    setShowModal(true);
  };

  const handleModalSubmit = () => {
    if (!username) {
      alert('Please enter your name.');
      return;
    }

    dispatch(setUserDetails({ username })); 
    navigate('/quiz')
    setShowModal(false); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Quiz App</h1>
      <button
        onClick={handlePlay}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Play
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-4">Enter Your Name</h2>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-md mb-4"
              placeholder="Name"
            />
            <div className="flex justify-end">
              <button
                onClick={handleModalSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
