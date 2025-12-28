import React, { useEffect } from "react";
import LandingSearch from "../components/LandingSearch";
import MovieCard from "../components/MovieCard";
import SkeletonCard from "../components/SkeletonCard";

// receives the global state and handlers from app.jsx
const Home = ({ movies, loading, error, searchTerm, hasSearched, setSearchTerm, onSearch, onMovieSelect }) => {

    useEffect(() => {
        onSearch('');
    }, []);

    const isWelcome = !hasSearched && !loading;

    const showResults = hasSearched && !loading && !error && movies.length > 0;
    const showNoResults = hasSearched && !loading && !error && movies.length === 0;

    return (
        <div className="pt-16 w-full flex flex-col items-center min-h-[70vh] duration-300">

            {/* landing Search */}
            {isWelcome && (
                <div className="flex flex-col gap-8 items-center justify-center text-center mt-12 w-full max-w-2xl px-4 animate-in fade-in zoom-in duration-500">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                        Unlimited movies, <br/> TV shows, and more.
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                        Discover your next favorite story.
                    </p>
                    <div className="w-full">
                        <LandingSearch 
                            onSearch={onSearch} 
                            searchTerm={searchTerm}
                        />
                    </div>
                </div>
            )}

            {/* loading state */}
            {loading && (
                <div className="w-full max-w-6xl mx-auto px-4">
                    <h2 className="text-xl font-semibold mb-6 text-slate-400 animate-pulse">Searching database...</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center duration-300">
                        {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
                    </div>
                </div>
            )}

            {/* error state */}
            {error && (
                <div className="text-center py-20 bg-rose-50 dark:bg-rose900/20 rounded-2xl p-8 w-full max-w-lg mx-auto">
                    <h2 className="text-4xl font-bold text-rose-600 dark:text-rose-400 mt-4 mb-2">Oops!</h2>
                    <p className="text-slate-600 dark:text-slate-300">{error}</p>
                </div>
            )}

            {/* results */}
            {showResults && (
                <div className="w-full max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white border-l-4 border-violet-600 pl-4">
                        Results for "{searchTerm}"
                    </h2>
                    <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                onCardClick={onMovieSelect}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* no results state */}
            {showNoResults && (
                <div className="text-center py-20">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        No movies found
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400">
                        We couldn't find anything matching "{searchTerm}".
                    </p>
                    <button
                        onClick={() => { setSearchTerm(''); onSearch(''); }}
                        className="mt-6 text-violet-600 hover:text-violet font-semibold"
                    >
                        Clear Search
                    </button>
                </div>
            )}
        </div>
    );
};

export default Home;