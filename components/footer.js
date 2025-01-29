import React from "react";
import { FaWhatsapp, FaEnvelope, FaGlobe, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-green-800 via-green-600 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo and Name Section */}
        <div className="flex flex-col items-start md:items-center">
          <img
            src="/logo-loan.jpg" // Replace with your logo URL
            alt="Loan & Own Mortgages Logo"
            className="mb-4 rounded-full w-16 h-16"
          />
          <h2 className="text-xl font-bold">Mohit Gupta</h2>
          <p className="text-md">(Principal Broker)</p>
        </div>

        {/* Contact Information Section */}
        <div className="text-center md:text-left">
          <p className="flex items-center space-x-2 text-md mb-2">
            <FaWhatsapp className="text-green-300" />
            <a href="tel:+61413219624" className="hover:underline">
              +61413219624
            </a>
          </p>
          <p className="flex items-center space-x-2 text-md mb-2">
            <FaEnvelope className="text-red-300" />
            <a href="mailto:mohitg@lnomortgages.com.au" className="hover:underline">
              mohitg@lnomortgages.com.au
            </a>
          </p>
          <p className="flex items-center space-x-2 text-md">
            <FaGlobe className="text-orange-300" />
            <a href="https://www.lnomortgages.com.au/" className="hover:underline">
              www.lnomortgages.com.au
            </a>
          </p>
        </div>

        {/* Social Media Links Section */}
        <div className="flex flex-col items-center">
          <p className="text-md font-semibold mb-4">Follow Us</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:scale-110">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:scale-110">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:scale-110">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
