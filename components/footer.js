import React from "react";
import { FaWhatsapp, FaEnvelope, FaGlobe, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo and Name Section */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/logo-loan.jpg"
            alt="Loan & Own Mortgages Logo"
            className="mb-4 rounded-full w-20 h-20 border-2 border-yellow-500 shadow-lg"
          />
          <h2 className="text-2xl font-bold tracking-wide">Mohit Gupta</h2>
          <p className="text-lg text-yellow-400">(Principal Broker)</p>
        </div>

        {/* Contact Information Section */}
        <div className="text-center md:text-left space-y-3">
          <p className="flex items-center justify-center md:justify-start space-x-2 text-lg">
            <FaWhatsapp className="text-yellow-400" />
            <a href="tel:+61413219624" className="hover:underline hover:text-yellow-400 transition">
              +61413219624
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-start space-x-2 text-lg">
            <FaEnvelope className="text-yellow-400" />
            <a href="mailto:mohitg@lnomortgages.com.au" className="hover:underline hover:text-yellow-400 transition">
              mohitg@lnomortgages.com.au
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-start space-x-2 text-lg">
            <FaGlobe className="text-yellow-400" />
            <a href="https://www.lnomortgages.com.au/" className="hover:underline hover:text-yellow-400 transition">
              www.lnomortgages.com.au
            </a>
          </p>
        </div>

        {/* Social Media Links Section */}
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mb-4 text-yellow-400">Follow Us</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:scale-110 hover:text-yellow-400 transition">
              <FaFacebook size={28} />
            </a>
            <a href="#" className="hover:scale-110 hover:text-yellow-400 transition">
              <FaInstagram size={28} />
            </a>
            <a href="#" className="hover:scale-110 hover:text-yellow-400 transition">
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Loan & Own Mortgages. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
