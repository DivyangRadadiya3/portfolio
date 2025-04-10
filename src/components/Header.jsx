import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Header = memo(({ isMenuOpen, setIsMenuOpen, navItem, activeNavItem, handleSmoothScroll }) => {
  return (
    <header className="fixed w-full z-50 bg-white/80 rounded-b-xl backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <h1 className="font-semibold text-3xl text-black" aria-label="Website Title">
            Divyang Radadiya
          </h1>
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? faXmark : faBarsStaggered}
                className={`h-6 w-6 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform rotate-180 transition-all duration-500' : ''}`}
              />
            </button>
          </div>
          {isMenuOpen && (
            <nav className={`absolute top-16 left-0 w-full bg-white rounded-b-2xl shadow-xl transition-transform transform duration-500 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <ul className="flex flex-col items-center space-y-4 text-left p-4">
                {navItem.map((item) => (
                  <li key={item} className="relative group w-full">
                    <a
                      href={`#${item}`}
                      onClick={(e) => {
                        handleSmoothScroll(e, item);
                        setTimeout(() => setIsMenuOpen(false), 500); // Delay closing for smoother transition
                      }}
                      className={`text-gray-700 transition-colors duration-500 relative group ${activeNavItem === item ? 'font-bold text-indigo-600' : ''}`}
                      aria-label={`Navigate to ${item.charAt(0).toUpperCase() + item.slice(1)}`}
                    >
                      <span className="block">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                      <span className="absolute -left-2 top-1/2 transform -translate-y-1/2 h-full w-1 bg-indigo-600 rounded-r-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
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
                className={`text-gray-700 hover:text-indigo-600 relative group transition-colors duration-300 ${activeNavItem === item ? 'font-bold text-indigo-600' : ''}`}
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