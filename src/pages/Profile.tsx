// src/components/UserProfile.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const UserProfile: React.FC = () => {
  const { username } = useSelector((state: RootState) => state.user); 
  const initials = username
    ? username
        .split(' ')
        .map((name) => name[0])
        .join('')
        .toUpperCase()
    : '';

  return (
    <div className="flex items-center">
      <div className="bg-blue-500 z-10 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
        {initials}
      </div>
      <div>
        <p className="font-bold text-black">{username}</p>
      </div>
    </div>
  );
};

export default UserProfile;
