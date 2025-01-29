import React from 'react';

const Header = () => {
  return (
    <div className="w-full h-[70vh] max-w-5xl flex flex-col mx-auto justify-center items-center px-6 sm:px-8">
      <div className="text-center relative top-[-20%] sm:top-[-10%]">
        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-black">
          Unlock Your{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-orange-400 text-transparent bg-clip-text">
            Dream
          </span>{" "}
          Home
        </span>
        <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-600 block mt-4 sm:mt-6 underline">
          with Tailored Loan Solutions - Start Your Journey to Home Ownership Today!
        </span>
      </div>
    </div>
  );
};

export default Header;
