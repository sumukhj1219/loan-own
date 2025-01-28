import React from 'react';

const Header = () => {
  return (
    <div className="w-full h-[70vh] max-w-5xl flex flex-col mx-auto justify-center items-center">
      <div className="text-center relative top-[-20%]">
        <span className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 block">
          Unlock Your Dream <span className="text-gradient">Home</span>
        </span>
        <span className="text-4xl font-light text-gray-600 block mt-2">
          with Tailored Loan Solutions - Start Your Journey to Home Ownership Today!
        </span>
      </div>
    </div>
  );
};

export default Header;
