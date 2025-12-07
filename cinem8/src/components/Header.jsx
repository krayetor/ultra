import react, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Header = ({ isDarkMode, toggleTheme, searchTerm, setSearchTerm, onSearch }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchTerm);
        }
    };

    return (
        <nav className="flex items-center justify-between p-4 mx-4 mt-4 bg-white dark:bg-gray-800 shadow-lg dark:shadow-xl rounded-full sticky top-4 z-50 transition-colors duration-300">
            
            {/* logo / app title */}
            <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                cinem8
            </Link>

            {/* desktop nav-links (hidden on mobile) */}
            <div className="hidden md:flex items-center space-x-6">
                <div className="nav-links space-x-4 text-sm font-medium">
                    <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Home</Link>
                    <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">About</Link>
                    <Link to="/favorites" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Favorites</Link>
                </div>
            </div>

            {/* theme toggle & mobile button */}
            <div className="flex items-center space-x-4">
                
                {/* theme toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
                >
                    {isDarkMode ? '🌙' : '☀️'}
                </button>

                {/* hamburger icon (visible only in mobile/tablet) */}
                <button
                    className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(true)}
                >
                    
                    {/* hamburger svg */}
                    <svg
                        className="w-6 h-6 text-gray-900 dark:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="https://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* mobile slide-out menu */}
            <MobileMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                toggleTheme={toggleTheme}
                isDarkMode={isDarkMode}
            />
        </nav>
    );
};

export default Header;