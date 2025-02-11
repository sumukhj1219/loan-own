import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <Image 
        src="/sydney.jpg"
        layout="fill"
        objectFit="cover"
        alt="Sydney"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-tl from-black via-transparent to-transparent opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-black via-transparent to-transparent opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-transparent opacity-50"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-6 sm:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-shadow-md">
          Your One-Stop Solution for All Your Lending Needs
        </h1>
        <p className="mt-4 text-xl sm:text-2xl font-light text-white opacity-90">
          Tailored solutions to help you achieve homeownership and financial success.
        </p>
      </div>
    </div>
  );
};

export default Header;
