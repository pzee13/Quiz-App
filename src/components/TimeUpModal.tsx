import React from 'react';

interface TimeUpModalProps {
  show: boolean;
}

const TimeUpModal: React.FC<TimeUpModalProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg transform scale-90 transition-transform duration-300 ease-in-out">
        <p className="text-lg font-semibold">Time's up!</p>
      </div>
    </div>
  );
};

export default TimeUpModal;
