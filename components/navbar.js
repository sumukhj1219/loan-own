"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { name: "OUR BUSINESS", link: "/business" },
    { name: "OUR SERVICES", link: "/" },
    { name: "CONTACT US", link: "/contact" },
    { name: "HOME CALCULATOR'S", link: "/calculators" },
    { name: "FAQ's", link: "/faqs" },
  ];

  return (
    <nav className="w-full h-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6">
        <Link href={'/'}>
          <div className="flex items-center space-x-3">
            <Image
              src={"/logo-loan.jpg"}
              width={80}
              height={80}
              alt="logo"
              className="rounded-full shadow-lg border-2 border-yellow-500"
            />
            <div className="text-white">
              <span className="md:text-3xl text-xl font-bold tracking-wide">LOAN & OWN</span>
              <span className="text-sm font-light block text-yellow-400">
                MORTGAGES
              </span>
            </div>
          </div>
        </Link>

        <ul className="hidden md:flex space-x-8 text-lg">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="text-white font-medium hover:text-yellow-400 hover:underline transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <Link
        href="https://wa.me/610413219624"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-white rounded-lg shadow-md transition"
      >
        <span>+61 401 234 567</span>
      </Link>
        </ul>
        
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 p-4 text-lg">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="block text-white font-medium hover:text-yellow-400 hover:underline transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      )}
      
    </nav>
  );
}
export default Navbar