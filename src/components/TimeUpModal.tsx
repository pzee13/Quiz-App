import React from 'react';

interface TimeUpModalProps {
  show: boolean;
}

const TimeUpModal: React.FC<TimeUpModalProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
      <p>Time's up!</p>
    </div>
  );
};

export default TimeUpModal;
