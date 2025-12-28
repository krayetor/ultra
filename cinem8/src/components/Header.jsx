import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Header = ({ isDarkMode, toggleTheme, searchTerm, setSearchTerm, onSearch }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchTerm);
        }
    };


    return (
        <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-gray-300 dark:border-slate-700 shadow-2xl rounded-full transition-colors duration-300">
            <div className="px-6 sm:px-8 duration-300">
                <div className="flex items-center justify-between h-16 duration-300">
                
                    {/* logo / app title */}
                    <Link to="/" className="text-xl font-bold tracking-[0.2em] text-slate-900 dark:text-white uppercase shrink-0 duration-300">
                        cinem<span className="text-violet-600 duration-300">8</span>
                    </Link>

                    {/* search bar */}
                    {(location.pathname !== "/" || searchTerm?.length > 0) && (
                        <div className="pl-2 hidden md:flex flex-1 max-w-md mx-8 duration-300">
                            <div className="relative w-full group duration-300">
                                <input
                                    type="text"
                                    placeholder="Quick Search..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full py-2 pl-4 pr-10 focus:ring-2 focus:ring-violet-600 transition-all border border-gray-300 dark:border-slate-700 duration-300 placeholder-slate-400"
                                />
                                <button
                                    onClick={() => onSearch(searchTerm)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-violet-600 pr-2 duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}
                    

                    {/* actions */}
                    <div className="pl-2 flex flex-wrap gap-2 items-center space-x-2 sm:space-x-4 duration-300">

                        <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide uppercase duration-300">
                            <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">Home</Link>
                            <Link to="/about" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">About</Link>
                            <Link to="/favorites" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">Favorites</Link>
                        </div>

                        {/* theme toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full border border-gray-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-300"
                        >
                            {isDarkMode ? '🌙' : '☀️'}
                        </button>

                        <button
                            className="md:hidden p-2 text-slate-600 dark:text-slate-300 focus:outline-none duration-300"
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