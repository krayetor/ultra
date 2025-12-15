import React from "react";
import MovieCard from "../components/MovieCard";
import { useFavorites } from "../context/FavoritesContext";

const FavoritesPage = ({ onMovieSelect }) => {
    const { favorites, toggleFavorite } = useFavorites();

    if (favorites.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <div className="bg-slate-200 dark:bg-slate-800 p-6 rounded-full mb-6">
                    <span className="text-4xl">💔</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    No Favorites Yet
                </h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-md">
                    You haven't added any movies to your collection. Go back to home page and click the star icon on movies you love.
                </p>
            </div>
        );
    }

    return (
        <div className="py-8 w-full">
            <h2 className="text-2xl font-semibold mb-10 text-slate-800 dark:text-slate-100 border-l-4 border-violet-600 pl-4">
                My Collection <span className="text-sm font-normal text-slate-500 ml-2">({favorites.length} items)</span>
            </h2>

            <div className="flex flex-wrap justify gap-8 w-full">
                {favorites.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onCardClick={onMovieSelect}
                        onFavoriteToggle={() => toggleFavorite(movie)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FavoritesPage;