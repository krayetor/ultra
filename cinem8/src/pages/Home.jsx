import React from "react";
import LandingSearch from "../components/LandingSearch";
import MovieCard from "../components/MovieCard";
import SkeletonCard from "../components/SkeletonCard";

// receives the global state and handlers from app.jsx
const Home = ({ movies, loading, error, searchTerm, setSearchTerm, onSearch, onMovieSelect }) => {

    // determine to show the full landing page layout
    const showLandingPage = !searchTerm && movies.length === 0 && !loading && !error;

    // landing page view
    if (showLandingPage) {
        return (
            <div className="flex flex-col gap-6 items-center justify-center min-h-[80vh] w-full px-4 text-center">

                <div className="space-y-6 mb-12 max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
                        Welcome to <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-rose-600">Cinem8</span>
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-light">
                        Explore the cinematic universe. Search for your favorite movies instantly.
                    </p>
                </div>
                
                {/* using local state search search components here */}
                <div className="w-full max-w-xl">
                    <LandingSearch onSearch={onSearch} />
                </div>
            </div>
        );
    }


    // dashboard / search results view
    return (
        <div className="py-8 w-full items-center justify-center">
            {/* error state */}
            {error && (
                <div className="text-center text-rose-500 mt-8 p-4 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-xl">
                    {error}
                </div>
            )}

            {/* results title */}
            {(loading || movies.length > 0) && (
                <h2 className="pb-5 text-2xl font-semibold m-b text-slate-800 dark:text-slate-100 text-center md:text-left">
                    {loading ? `Searching for "${searchTerm}"...` : `Results for: "${searchTerm}"`}
                </h2>
            )}

            {/* grid layout */}
            <div className="flex flex-wrap gap-8 justify-center w-full">
                
                {/* skelton while loading */}
                {loading && (
                    [...Array(8)].map((_, index) => <SkeletonCard key={index} />)
                )}

                {/* actual movies */}
                {!loading && movies.length > 0 && movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onCardClick={onMovieSelect}
                        onFavoriteToggle={() => {
                            console.log('Toggle Favorite', movie.id);
                            alert(`You added ${movie.title} to your favorites`);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;