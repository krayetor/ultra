import React from "react";
import LandingSearch from "../components/LandingSearch";

// receives the global state and handlers from app.jsx
const Home = ({ movies, loading, error, searchTerm, setSearchTerm, onSearch }) => {

    // determine to show the full landing page layout
    const showLandinPage = !searchTerm && movies.length === 0 && !loading && !error;

    // landing page view
    if (showLandinPage) {
        return (
            <div className="flex flex-col items-center justify-center min-h[calc(100vh-180px)] p-4">

                {/* main title */}
                <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 dark:text-white transition-colors durations-300">
                    Welcome to cinem8
                </h1>

                {/* central search bar input */}
                <LandingSearch
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    onSearch={onSearch}
                />

                <p className="mt-6 text-gray-600 dark:text-gray-400">
                    Search movies, actors, or keywords to get started!
                </p>
            </div>
        );
    };


    // dashboard / search results view
    return (
        <div className="py-4">

            {/* loading state */}
            {loading && <p className="text-center text-blue-500 mt-8">Loading movies...</p>}

            {/* error state */}
            {error && <div className="text-center text-red-500 mt-8 p-4 bg-red-100 dark:bg-red-900 rounded-lg">{error}</div>}

            {/* movie list */}
            {movies.length > 0 &&
                <>
                    <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                        Results for: "{searchTerm}"
                    </h2>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">

                        {movies.map((movie) => (

                            <div key={movie.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 transition-transform hover:scale-[1.02]">
                                <img
                                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'placeholder_url'}
                                    alt={`${movie.title} Poster`}
                                    className="w-full h-auto rounded-lg mb-2 object-cover"
                                />
                                <h3 className="text-sm font-semibold truncate text-gray-900 dark:text-white">{movie.title}</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Year: {movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</p>
                            </div>
                        ))}

                    </div>
                </>
            }

        </div>
    );
};

export default Home;