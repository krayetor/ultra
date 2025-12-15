import React, { useState } from "react";
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
            className="group relative bg-white dark:bg-slate-800 rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col z-0 p-3"
            style={{ width: '294px', height: '339px'}}
            onClick={() => onCardClick(movie)}
        >
            {/* image section */}
            <div className="relative h-[210px] w-full overflow-hidden rounded-xl">
                <ImageWithFallback
                    src={posterUrl}
                    alt={movie.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-100 rounded-xl rounded-t-xl"
                />
            </div>

            {/* content section */}
            <div className="p-4 flex flex-col justify-center h-[129px]">
                
                {/* title row + star */}
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight line-clamp w-[220px]">
                        {movie.title}
                    </h3>

                    {/* star icon */}
                    <button
                        onClick={handleFavoriteClick}
                        className="m-1 transition-transform active:scale-90 focus:otline-none"
                    >
                        {isFavorite ? (
                            <span className="text-violet-600 text-2xl">★</span>
                        ): (
                            <svg
                                className="w-6 h-6 text-slate-400 hover:text-violet-600 dark:text-slate-400 dark:hover:text-white transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                            >
                               <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674" /> 
                            </svg>
                        )}
                    </button>
                </div>

                {/* metadata */}
                <div className="text-sm text-slate-500 dark:text-slate-400 space-y-1">
                    <p className="m-2">Released: {movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</p>
                    <p className="m-2">Ratings: <span className="font-semibold text-slate-700 dark:text-slate-200">{movie.vote_average?.toFixed(1)}</span></p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;