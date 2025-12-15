import React, { createContext, useState, useEffect, useContext } from "react";

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorite] = useState(() => {
        // load from local storage on initial render
        const saved = localStorage.getItem("cinem8_favorites");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        // save to local storage whenever favorites change
        localStorage.setItem("cinem8_favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movie) => {
        setFavorite((prev) => {
            if (!prev.some(m => m.id === movie.id)) {
                return [...prev, movie];
            }
            return prev;
        });
    };

    const removeFromFavorites = (movieId) => {
        setFavorite((prev) => prev.filter((m) => m.id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favorites.some((m) => m.id === movieId);
    };

    const toggleFavorite = (movie) => {
        if (isFavorite(movie.id)) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    };

    return (
        <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};