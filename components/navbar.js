import Image from "next/image";
import React from "react";

const Navbar = () => {
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
    <nav className="w-full h-20 bg-gradient-to-r from-blue-500 to-blue-700 fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6">
        <div className="flex items-center space-x-3">
          <Image
            src={"/logo-loan.jpg"}
            width={50}
            height={50}
            alt="logo"
            className="rounded-full shadow-md"
          />
          <span className="text-white text-2xl font-semibold tracking-wide">
            Loan & Own
          </span>
        </div>

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

        <div className="md:hidden text-white text-3xl cursor-pointer">
          &#9776;
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
