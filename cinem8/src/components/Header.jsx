import React, { useState } from "react";
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
        <nav className="sticky top-0 z-50 w-full bg-white/70 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* logo / app title */}
                    <Link to="/" className="text-2xl font-extrabold tracking-tighter text-slate-900 dark:text-white z-50 duration-300">
                        cinem<span className="text-violet-600">8</span>
                    </Link>

                    
                    <div className="hidden md:flex flex-1 max-w-lg mx-8">
                        <div className="relative w-full group">
                            <input
                                type="text"
                                placeholder="Quick Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full py-2 pl-4 pr-10 focus:ring-2 focus:ring-violet-600 transition-all border-transparent dark:border-slate-700"
                            />
                            <button
                                onClick={() => onSearch(searchTerm)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-violet-600"
                            >
                                🔍
                            </button>
                        </div>
                    </div>
                    

                    {/* actions */}
                    <div className="flex items-center space-x-4 sm:space-x-4">
                        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
                            <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400">Home</Link>
                            <Link to="/favorites" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400">Favorites</Link>
                        </div>

                        {/* theme toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                        >
                            {isDarkMode ? '🌙' : '☀️'}
                        </button>

                        <button
                            className="md:hidden p-2 text-slate-400 dark:text-300 focus:outline-none"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg> 

                        </button>
                    </div>
                </div>
            </div>

            <MobileMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                toggleTheme={toggleTheme}
                isDarkMode={isDarkMode}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSearch={onSearch}
            />
        </nav>
    );
};

export default Header;