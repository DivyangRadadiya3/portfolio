import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Header = memo(({ isMenuOpen, setIsMenuOpen, navItem, handleSmoothScroll }) => {
  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <h1 className="font-semibold text-3xl text-black" aria-label="Website Title">
            Divyang Radadiya
          </h1>
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? faXmark : faBarsStaggered}
                className="h-6 w-6"
              />
            </button>
          </div>
          {isMenuOpen && (
            <nav className="absolute top-16 left-0 w-full bg-white rounded-b-xl shadow-xl">
              <ul className="flex flex-col items-start space-y-4 p-4">
                {navItem.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={(e) => {
                        handleSmoothScroll(e, item);
                        setIsMenuOpen(false);
                      }}
                      className="text-gray-700 transition-colors duration-300 relative group"
                      aria-label={`Navigate to ${item.charAt(0).toUpperCase() + item.slice(1)}`}
                    >
                      <span className="block">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navItem.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleSmoothScroll(e, item)}
                className="text-gray-700 hover:text-indigo-600 relative group transition-colors duration-300"
                aria-label={`Navigate to ${item.charAt(0).toUpperCase() + item.slice(1)}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
});

export default Header;