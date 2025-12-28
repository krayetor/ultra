import React, { useEffect, useState } from "react";
import useTypewriter from "../hooks/useTypewriter";

const LandingSearch = ({ onSearch, searchTerm }) => {

    const [localTerm, setLocalTerm] = useState(searchTerm || "");

    useEffect(() => {
        setLocalTerm(searchTerm || "");
    }, [searchTerm])

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearch(localTerm);
        }
    };

    return (
        <div className="w-full max-w-7xl items-center mx-auto z-10 relative">

            <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 p-2 shadow-2xl rounded-full border border-gray-100 dark:border-slate-700 transition-colors duration-300 ring-4 ring-transparent focus-within:ring-violet-200 dark:focus-within:ring-violet-900/30">

                {/* search icon */}
                <svg className="w-6 h-6 text-slate-600 ml-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>

                <input
                    type="text"
                    autoComplete="off"
                    name="cinem8-search"
                    placeholder={useTypewriter(['Search movies...', 'Search actors...','Search genres...', 'Search keywords...'])}
                    value={localTerm}
                    onChange={(e) => setLocalTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 min-w-0 bg-transparent text-base focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 pl-2 sm:pl-4 truncate"
                />

                <button
                    onClick={() => onSearch(localTerm)}
                    className="shrink-0 p-2 sm:p-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full transition-colors shadow-lg flex items-center justify-center"
                    aria-label="Search"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default LandingSearch;