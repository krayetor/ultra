import React from "react";
import { Link } from "react-router-dom";
import useTypewriter from "../hooks/useTypewriter";

const MobileMenu = ({ isOpen, onClose, isDarkMode, toggleTheme, searchTerm, setSearchTerm, onSearch }) => {

    const handleSearchSubmit = () => {
        onSearch(searchTerm);
        onClose();
    };

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') handleSearchSubmit();
    }

  return (
    <>
        {/* backdrop */}
        <div 
            className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-90 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
        />

        {/* sidebar */}
        <div
            className={`fixed top-24 left-1/2 -translate-1/2 w-[90%] max-w-sm bg-white dark:bg-slate-900 rounded-[30px] shadow-2xl z-100 overflow-hidden border border-gray-100 dark:border-slate-800 transition-all duration-300 ease-out origin-top
                ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'}
                bg-white dark:bg-slate-900 border-l border-gray-200 dark:border-slate-800`}
        >
            <div className="gap-4 p-6 flex flex-col space-y-6">

                {/* header of menu */}
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100 dark:border-slate-800">
                    <span className="text-lg font-bold tracking-widest uppercase text-slate dark:text-white">
                        Menu
                    </span>
                    <button 
                        onClick={onClose} 
                        className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-rose-500 hover:bg-rose-50 dark:hover:text-rose-400 dark:hover:bg-slate-700 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* mobile search bar */}
                <div className="placeholder-slate-500 text-sm font-medium mb-8 flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3 ring-1 ring-transparent focus-within:ring-violet-600 transition-all">
                    <input
                        type="text"
                        className="bg-transparent w-full outline-none text-slate-900 dark:text-white placeholder-slate-500 text-base"
                        placeholder={useTypewriter(['Search movies...', 'Search actors...','Search genres...', 'Search keywords...'])}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />

                    <button onClick={handleSearchSubmit} className="text-violet-600 ml-2">
                        🔍
                    </button>
                </div>

                <nav className="flex flex-col space-y-4">
                    <Link 
                        to="/" 
                        onClick={onClose} 
                        className="px-4 py-3 rounded-xl text-lg font-medium text-slate-700 dark:text-slate-200 hover:bg-violet-50 dark:hover:bg-slate-800 hover:text-violet-600 transition-colors"
                    >
                        Home
                    </Link>
                    <Link 
                        to="/about" 
                        onClick={onClose} 
                        className="px-4 py-3 rounded-xl text-lg font-medium text-slate-700 dark:text-slate-200 hover:bg-violet-50 dark:hover:bg-slate-800 hover:text-violet-600 transition-colors"
                    >
                        About
                    </Link>
                    <Link 
                        to="/favorites" 
                        onClick={onClose} 
                        className="px-4 py-3 rounded-xl text-lg font-medium text-slate-700 dark:text-slate-200 hover:bg-violet-50 dark:hover:bg-slate-800 hover:text-violet-600 transition-colors"
                    >
                        Favorite
                    </Link>
                </nav>

                {/* theme */}
                <div className="mt-auto pt-8 border-t border-gray-100 dark:border-slate-800">
                    <button
                        onClick={toggleTheme}
                        className="flex items-center justify-center w-full space-x-3 py-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                        <span>{isDarkMode ? '🌙' : '☀️' }</span>
                        <span>{isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode Dark'}</span>
                    </button>
                </div>
            </div>
        </div>
    </>
  );
};

export default MobileMenu;