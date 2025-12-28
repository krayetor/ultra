import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const Modal = ({ isOpen, onclose, children, selectedMovie }) => {
    
    const { isFavorite, toggleFavorite } = useFavorites();

    if (!isOpen) return null;

    const favorited = selectedMovie ? isFavorite(selectedMovie.id) : false;

    return (
        <div className="fixed inset-0 backdrop-blur-sm z-100 flex items-center justify-center p-4 sm:p-6">
        
            {/* backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onclose}
            ></div>

            {/* modal content */}
            <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-300">

                {/* title */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-slate-800">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white truncate pr-4">
                        {selectedMovie ? selectedMovie.title : "Details"}
                    </h2>

                    <div className="flex items-center gap-4">
                        {selectedMovie && (
                            <button
                                onClick={() => toggleFavorite(selectedMovie)}
                                className="w-15 h-15 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                title={favorited ? "Remove from Favorites" : "Add to Favorites"}
                            >
                                {favorited ? (
                                    <span className="text-slate-400 text-2xl">★</span>
                                ) : (
                                    <span className="text-slate-400 text-2xl">☆</span>
                                )}
                            </button>
                        )}
                        <button
                            onClick={onclose}
                            className="w-15 h-15 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-600 dark:hover:bg-slate-700 transition-colors"
                        >
                           ✕ 
                        </button>
                    </div>
                </div>

                {/* body */}
                <div className="p-6 overflow-y-auto custom-scrollbar">
                    {children}
                </div>

                {/* footer */}
                {selectedMovie && (
                    <div className="p-4 border-t border-gray-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                        <Link
                            to={`movie/${selectedMovie.id}`}
                            onClick={onclose}
                            className="block w-full py-3 text-center bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-violet-600/20"
                        >
                            View Full Details & Trailer
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;