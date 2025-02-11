import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/sydney.jpg"
          layout="fill"
          objectFit="cover"
          alt="Sydney"
          quality={80}
          priority
        />
        
        {/* Darker Gradient Overlays for Better Readability */}
        <div className="absolute inset-0 bg-black/70 sm:bg-black/50"></div>
      </div>

      {/* Content Section (Ensures text stays inside dark gradient) */}
      <div className="relative z-10 text-center px-6 sm:px-12 max-w-3xl">
        <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Your One-Stop Solution for All Your Lending Needs
        </h1>
        <p className="mt-4 text-lg sm:text-2xl text-white opacity-90">
          Tailored solutions to help you achieve homeownership and financial success.
        </p>
      </div>
    </div>
  );
};

export default Header;
