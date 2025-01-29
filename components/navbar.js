"use client"
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      name: "Our Business",
      link: "#business",
    },
    {
      name: "Our Services",
      link: "#services",
    },
    {
      name: "FAQ's",
      link: "#faqs",
    },
    {
      name: "HomeLoan-Calculators",
      link: "#calculators",
    },
    {
      name: "Contact Us",
      link: "#contact",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  return (
    <nav className="w-full h-20 bg-gradient-to-r from-green-900 to-green-900 via-green-700 fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6">
        <div className="flex items-center space-x-3">
          <Image
            src={"/logo-loan.jpg"}
            width={50}
            height={50}
            alt="logo"
            className="rounded-full shadow-md"
          />
          <span className="text-white text-2xl font-bold tracking-wide leading-tight">
            Loan & Own
            <span className="text-sm font-light flex items-center justify-center">Mortgages</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white text-lg">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-green-900 to-green-900 via-green-700 p-4 text-white text-lg">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block hover:text-yellow-300 transition-colors duration-300"
                  onClick={() => setIsOpen(false)} // Close menu after clicking
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
