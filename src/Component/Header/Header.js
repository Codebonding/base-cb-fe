import React, { useState, useEffect } from 'react';
import logo from '../../assest/image/logo.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import { sections_1 } from '../../constant';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleClick = (sectionId, event) => {
    event.preventDefault(); // Prevent default anchor behavior

    if (location.pathname === "/register") {
      navigate("/", { replace: true });
    } else {
      // Scroll to the section
      scrollToSection(sectionId);
      setActiveLink(sectionId);

      // Update the URL without `#`
      const newUrl = `${window.location.origin}${location.pathname}?section=${sectionId}`;
      window.history.replaceState(null, "", newUrl);
    }
  };

  const handleScroll = () => {
    let foundSection = '';
    sections_1.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          foundSection = id;
        }
      }
    });
    if (foundSection) {
      setActiveLink(foundSection);
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const sectionId = queryParams.get("section");

    if (sectionId) {
      scrollToSection(sectionId);
      setActiveLink(sectionId);
    }
  }, [location.search]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-32 h-16 object-contain" />
        </div>

        {/* Navigation Menu for larger screens */}
        <nav className="hidden md:flex space-x-10 text-lg font-medium">
          <ul className="flex space-x-10 text-gray-800">
            {sections_1.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`?section=${id}`}
                  onClick={(event) => handleClick(id, event)}
                  className={`text-gray-800 relative overflow-hidden hover:text-green-500 transition-all duration-300 ease-in-out
                    ${activeLink === id ? 'text-green-500 font-semibold' : ''}`}
                >
                  {label}
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-green-500 transform scale-x-0 origin-left transition-all duration-300 ease-in-out"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 hover:text-green-500"
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 absolute top-16 left-0 w-full z-40 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col space-y-6 px-6">
            {sections_1.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`?section=${id}`}
                  onClick={(event) => handleClick(id, event)}
                  className={`text-lg font-semibold text-gray-800 relative overflow-hidden hover:text-green-500  
                    ${activeLink === id ? 'text-green-500 font-semibold' : ''}`}
                >
                  {label}
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-green-500 transform scale-x-0 origin-left transition-all duration-300 ease-in-out"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
