import React from 'react';

const UserProfile: React.FC = () => {
  const  username = "Profile"

  const initials = "P"
    

  return (
    <div className="flex items-center space-x-2">
      <div className="bg-blue-500 z-10 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
        {initials}
      </div>
      <div>
        <p className="text-sm md:text-base font-bold text-white">{username}</p>
      </div>
    </div>
  );
};

export default UserProfile;
