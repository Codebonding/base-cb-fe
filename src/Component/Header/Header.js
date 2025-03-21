import React, { useState, useEffect } from "react";
import logo from "../../assest/image/logo.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { sections_1 } from "../../constant";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleClick = (sectionId, event) => {
    event.preventDefault();

    if (sectionId === "jobportal") {
      if (location.pathname !== "/jobportal") {
        navigate("/jobportal", { replace: true });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      if (location.pathname === "/jobportal") {
        navigate("/", { replace: true });
        setTimeout(() => scrollToSection(sectionId), 300);
      } else {
        scrollToSection(sectionId);
      }
      setActiveLink(sectionId);
      const newUrl = `${window.location.origin}${location.pathname}?section=${sectionId}`;
      window.history.replaceState(null, "", newUrl);
    }
  };

  const handleScroll = () => {
    let foundSection = "";
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
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  const isSpecialRoute =
    location.pathname === "/register" ||
    location.pathname === "/jobportal" ||
    location.pathname === "/Privacy-Policy" ||
    location.pathname === "/Disclaimer" ||
    location.pathname === "/Terms-and-conditions" ||
    location.pathname === "/Candiate" ||
    location.pathname === "/login";

  return (
    <header className="bg-[#0F5C6B] shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        {isSpecialRoute ? (
          <button
            onClick={handleBack}
            className="text-white hover:text-[#14B4A6] flex items-center space-x-2 transition-all duration-300 ease-in-out"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back</span>
          </button>
        ) : (
          <>
            <div className="flex items-center space-x-3">
              <div className="bg-white p-3 rounded-full shadow-md">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-30 h-12 object-contain"
                />
              </div>
            </div>
            <nav className="hidden md:flex space-x-10 text-lg font-medium">
              <ul className="flex space-x-10 text-white">
                {sections_1.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={id === "jobpanel" ? "/jobpanel" : `?section=${id}`}
                      onClick={(event) => handleClick(id, event)}
                      className={`relative overflow-hidden hover:text-[#14B4A6] transition-all duration-300 ease-in-out
                        ${
                          activeLink === id
                            ? "text-[#14B4A6] font-semibold"
                            : ""
                        }`}
                    >
                      {label}
                      <span
                        className={`absolute left-0 bottom-0 w-full h-0.5 bg-[#14B4A6] transform ${
                          activeLink === id ? "scale-x-100" : "scale-x-0"
                        } origin-left transition-all duration-300 ease-in-out`}
                      ></span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden md:flex space-x-4">
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-2 text-white bg-[#14B4A6] rounded-lg hover:bg-[#0F5C6B] hover:border-2 hover:border-[#14B4A6] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Login
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#14B4A6] transition-all duration-300 ease-in-out"
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
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0F5C6B] bg-opacity-95 shadow-lg fixed w-full top-16 left-0 z-40">
          <ul className="flex flex-col space-y-4 p-6 text-white">
            {sections_1.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={id === "jobpanel" ? "/jobpanel" : `?section=${id}`}
                  onClick={(event) => {
                    handleClick(id, event);
                    setIsMenuOpen(false);
                  }}
                  className={`block py-2 hover:text-[#14B4A6] transition-all duration-300 ease-in-out
                    ${activeLink === id ? "text-[#14B4A6] font-semibold" : ""}`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              {/* <button
                onClick={() => {
                  navigate("/Candiate");
                  setIsMenuOpen(false);
                }}
                className="w-full px-6 py-2 text-[#0F5C6B] bg-white rounded-lg hover:bg-[#14B4A6] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Sign Up
              </button> */}
            </li>
            <li>
              <button
                onClick={() => {
                  navigate("/login");
                  setIsMenuOpen(false);
                }}
                className="w-full px-6 py-2 text-white bg-transparent border-2 border-white rounded-lg hover:bg-[#14B4A6] hover:border-[#14B4A6] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
