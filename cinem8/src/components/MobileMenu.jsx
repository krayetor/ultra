import React from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import useTypewriter from "../hooks/useTypewriter";

const MobileMenu = ({ isOpen, onClose, toggleTheme, isDarkMode, searchTerm, setSearchTerm, onSearch }) => {

    const navigate = useNavigate();

    const typeWriterText = useTypewriter([
        'Search movies...',
        'Search actors...',
        'Search genres...',
        'Search keywords...'
    ])

    if (!isOpen) return null;

    const handleSearch = () => {
        onSearch(searchTerm);
        onClose();
    };

    const handleNavigation = (path) => {
        navigate(path);
        onClose();
    }

  return createPortal(
    <div className="fixed inset-0 z-60 flex items-center justify-center px-4">
        
        {/* backdrop */}
        <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
            onClick={onClose}
        ></div>

        {/* menu card */}
        <div className="relative w-full max-w-sm bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-4xl shadow-2xl p-6 animate-in zoom-in-95 fade-in duration-200">

            {/* close button top right */}
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

            <div className="flex flex-col gap-6 mt-2">

                {/* header text */}
                <div className="text-center">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-widest uppercase">
                        Menu
                    </h2>
                </div>

                {/* mobile search bar */}
                <div className="relative w-full">
                <input
                    type="text"
                    placeholder={typeWriterText}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key  === 'Enter' && handleSearch()}
                    className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl py-3 pl-4 pr-12 focus:ring-2 focus:ring-violet-600 transition-all border border-transparent outline-none"
                />

                    <button 
                        onClick={handleSearch} 
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-violet-600 p-1"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </div>

                <div className="h-px bg-gray-100 dark:bg-slate-800"></div>

                {/* links */}
                <nav className="flex flex-col gap-2 text-center">
                    <button
                        onClick={() => handleNavigation("/")} 
                        className="text-lg font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 py-3 rounded-xl transition-colors"
                    >
                        Home
                    </button>
                    <button 
                        onClick={() => handleNavigation("/about")} 
                        className="text-lg font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 py-3 rounded-xl transition-colors"
                    >
                        About
                    </button>
                    <button 
                        onClick={() => handleNavigation("/favorites")}
                        className="text-lg font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 py-3 rounded-xl transition-colors"
                    >
                        Favorite
                    </button>
                </nav>

                <div className="h-px bg-gray-100 dark:bg-slate-800"></div>

                {/* theme */}
                
                <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold transition-transform active:scale-95"
                >
                    {isDarkMode ? (
                        <><span>Switch to Light</span> ☀️</>
                    ) : (
                        <><span>Switch to Dark</span> 🌙</>
                    )} 
                </button>
            </div>
        </div>
    </div>,
    document.body
  );
};

export default MobileMenu;