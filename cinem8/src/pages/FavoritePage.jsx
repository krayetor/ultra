import React from "react";
import MovieCard from "../components/MovieCard";
import { useFavorites } from "../context/FavoritesContext";

const FavoritesPage = ({ onMovieSelect }) => {
    const { favorites, toggleFavorite } = useFavorites();

    if (favorites.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 duration-300">
                    No Favorites Yet
                </h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-md duration-300">
                    You haven't added any movies to your collection. Go back to home page and click the star icon on movies you love.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen pt-20 flex flex-col items-center justify-center">
           
            <div className="w-full max-w-6xl px-4">
                <h2 className="text-2xl font-semibold mb-10 text-slate-800 dark:text-slate-100 border-l-4 border-violet-600 duration-300">
                    My Collection <span className="text-sm font-normal text-slate-500 ml-2 duration-300">({favorites.length} items)</span>
                </h2>

                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-center w-full pt-4">
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
        </div>
    );
};

export default FavoritesPage;