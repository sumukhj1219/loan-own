import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className="w-full h-[90vh] relative">
      <img 
        src='/sydney.jpg'
        className='w-full h-full object-cover'
        alt="Sydney"
      />
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-black via-transparent to-transparent opacity-50"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-black via-transparent to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-bl from-black via-transparent to-transparent opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-br from-black via-transparent to-transparent opacity-50"></div>

      {/* Text in the center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-6 sm:px-8">
        <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-shadow-md">
          Everything you need as a mortgage broker and a financial planner
        </span>
        <div className="mt-4">
          <span className="text-xl sm:text-2xl font-light text-white opacity-90">
            Tailored solutions to help you achieve homeownership and financial success.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
