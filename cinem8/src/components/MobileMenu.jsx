import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ isOpen, onClose, isDarkMode, toggleTheme }) => {
  return (
    <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
        <div className="p-6">

            {/* close button */}
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-500 dark:hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.0rg/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {/* nav-links */}
            <nav className="flex flex-col space-y-4 mt-12">
                <Link to="/" onClick={onClose} className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Home</Link>
                <Link to="/about" onClick={onClose} className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">About</Link>
                <Link to="/favorites" onClick={onClose} className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Favorites</Link>
            </nav>

            {/* theme toogle (in menu) */}
            <div className="mt-8 pt-4 border-t dark:border-gray-700">
                <button
                    onClick={toggleTheme}
                    className="flex items-center space-x-2 text-gray-700  dark:bg-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                    <span className="text-xl">{isDarkMode ? '🌙' : '☀️'}</span>
                    <span>Toggle Theme ({isDarkMode ? 'Dark' : 'Light'})</span>
                </button>
            </div>

        </div>
    </div>
  );
};

export default MobileMenu;