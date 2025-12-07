import React from "react";

const LandingSearch = ({ searchTerm, setSearchTerm, onSearch }) => {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchTerm);
        }
    };

    return (
        <div className="w-full max-w-xl">

            <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 p-4 shadow-xl rounded-full transition-colors duration-300">

                {/* search icon */}
                <svg className="w-6 h-6 text-gray-500 dark:text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>

                <input
                    type="text"
                    placeholder="Search movies, actors, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex grow bg-transparent text-lg focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />

                <button
                    onClick={() => onSearch(searchTerm)}
                    className="p-1 rounded-full opacity-0"
                    aria-label="Search"
                >

                </button>
            </div>

        </div>
    );
};

export default LandingSearch;