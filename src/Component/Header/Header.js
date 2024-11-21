import React, { useState } from 'react';
import logo from '/IDC/cb/base-cb-fe/src/assest/image/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="bg-white text-gray-800 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-32 h-16 object-contain" />
        </div>

        {/* Navigation Menu for larger screens */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-lg font-semibold">
            <li>
              <a
                href="#home"
                onClick={() => scrollToSection('home')}
                className="hover:text-green-500 transition-all duration-200 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => scrollToSection('about')}
                className="hover:text-green-500 transition-all duration-200 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#faq"
                onClick={() => scrollToSection('faq')}
                className="hover:text-green-500 transition-all duration-200 ease-in-out"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => scrollToSection('contact')}
                className="hover:text-green-500 transition-all duration-200 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 hover:text-green-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <ul className="flex flex-col space-y-4 px-6">
            <li>
              <a
                href="#home"
                onClick={() => scrollToSection('home')}
                className="text-lg font-semibold text-gray-800 hover:text-green-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => scrollToSection('about')}
                className="text-lg font-semibold text-gray-800 hover:text-green-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#faq"
                onClick={() => scrollToSection('faq')}
                className="text-lg font-semibold text-gray-800 hover:text-green-500"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => scrollToSection('contact')}
                className="text-lg font-semibold text-gray-800 hover:text-green-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
