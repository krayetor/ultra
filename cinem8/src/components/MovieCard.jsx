import React from "react";
import ImageWithFallback from "./ImageWithFallback";
import { useFavorites } from "../context/FavoritesContext";

const MovieCard = ({ movie, onCardClick }) => {
    
    const { isFavorite, toggleFavorite } = useFavorites();
    const favorited = isFavorite(movie.id);

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        toggleFavorite(movie);
    }

    const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null;

    return (
        <div
            className="group relative bg-white dark:bg-slate-800 rounded-[20px] shadow-lg hover:shadow-2xl border border-gray-300 dark:border-slate-700 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col z-0 p-2.5"
            style={{ width: '294px', height: '339px'}}
            onClick={() => onCardClick(movie)}
        >
            {/* image section */}
            <div className="relative h-[205px] w-[274px] shrink-0 rounded-xl border border-gray-200 dark:border-slate-700 transition-all duration-300">
                <div className="h-full w-full overflow-hidden rounded-xl">
                    <ImageWithFallback
                        src={posterUrl}
                        alt={movie.title}
                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
            </div>

            {/* content section */}
            <div className="flex flex-col justify-center h-[103px] grow px-1 pt-3 pb-1">
                
                {/* title row + star */}
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight line-clamp w-[274px]">
                        {movie.title}
                    </h3>

                    {/* star icon */}
                    <button
                        onClick={handleFavoriteClick}
                        className="m-0.5 transition-transform active:scale-90 focus:otline-none"
                    >
                        {favorited ? (
                            <span className="text-violet-600 text-2xl">★</span>
                        ): (
                            <span className="text-slate-400 text-2xl">☆</span>
                        )}
                    </button>
                </div>

                {/* metadata */}
                <div className="text-sm text-slate-500 dark:text-slate-400 space-y-1">
                    <p>Released: {movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</p>
                    <p>Ratings: <span className="font-semibold text-slate-700 dark:text-slate-200">{movie.vote_average?.toFixed(1)}</span></p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;