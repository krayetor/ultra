import React, { useEffect, useRef, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useFavorites } from "../context/FavoritesContext";
import ImageWithFallback from "../components/ImageWithFallback";

const MovieDetails = () => {
    const { id } = useParams();

    // state
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);
    const [directors, setDirectors] = useState([]);
    const [trailer, setTrailer] = useState(null);
    
    // UI state
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);

    const { isFavorite, toggleFavorite } = useFavorites();
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    useEffect(() => {
        let isMounted = true;

        window.scrollTo(0, 0);
        setLoading(true);
        setErrorMsg(null);
        setMovie(null);

        if (!id || id === 'undefined' || id === 'null') {
            if (isMounted) {
                console.error("Invalid Movie ID detected:", id);
                setErrorMsg("Invalid Movie ID");
                setLoading(false);
            }
            return;
        }

        const fetchDetails = async () => {
        
            try {
                // fetch movie details + Credits
                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits,videos`
                );

                if (isMounted) {
                    setMovie(data);

                    // top 10 cast
                    if (data.credits?.cast) {
                        setCast(data.credits.cast.slice(0, 10));
                    }

                    // filter directors
                    if (data.credits?.crew) {
                        const directorsData = data.credits.crew.filter(person => person.job === "Director");
                        setDirectors(directorsData);
                    }

                    // find Youtube trailer
                    if (data.videos?.results) {
                        const officialTrailer = data.videos.results.find(
                            (vid) => vid.type === "Trailer" && vid.site === "YouTube"
                        );
                        setTrailer(officialTrailer);
                    }

                    setLoading(false);
                }

            } catch (error) {

                if (isMounted) {
                    console.error("Fetch Error:", error);
                    setErrorMsg("Failed to load movie details.");
                    setLoading(false);
                }
            }
        };

        fetchDetails();

        const timer = setTimeout(() => {
            if (isMounted) {
                setLoading((prev) => {
                    if (prev) return false;
                    return prev;
                });
            }

        }, 5000);

        return () => {
            isMounted = false;
            clearTimeout(timer);
        };
    }, [id, API_KEY]);

    // loading state
    if (loading) { 
        return(
            <div className="min-h-[60vh] mx-auto max-w-7xl flex flex-col items-center justify-center px-4">
                <div className="h-12 w-12 border-4 border-violet-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-slate-500 font-medium pt-4">Loading movie details..</p>
            </div>
        );
    }

    // error state
    if (errorMsg || !movie) {
        return (
            <div className="min-h-[60vh] mx-auto max-w-7xl flex flex-col items-center justify-center px-4 duration-300">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 duration-300">
                    {errorMsg || "Movie not found"}
                </h2>
                <p className="text-slate-500">
                    We couldn't locate the details for ID: <span className="font-mono bg-slate-200 dark:bg-slate-700 px-1 rounded">{id}</span>
                </p>
                <a href="/" className="px-6 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors duration-300 mt-4">
                    Go Home
                </a>
            </div>
        );
    } 

    const favorited = isFavorite(movie.id);

    return (
        <div className="w-full mx-auto pl-4 pt-10 max-w-7xl min-h-screen bg-slate-50 dark:bg-slate-900 flex justify-items-center justify-center items-center pb-20 transition-colors duration-300">

            <div className="w-full max-w-7xl px-4 md:px-8 transition-colors duration-300">

                {/* header text */}
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 pb-6">
                    Movie Details
                </h1>

                {/* main card container */}
                <div className="flex flex-col items-center lg:flex-row lg:items-start gap-8">

                    {/* left: Poster section */}
                    <div className="relative w-[550px] h-[400px] shrink-0">
                        <div className="aspect-2/3 w-full h-full rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-2xl">
                            <ImageWithFallback
                                src={movie.poster_path ? `https://image.tmdb.org/t/p/w780${movie.poster_path}` : null}
                                alt={movie.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* favorite star button */}
                        <button
                            onClick={() => toggleFavorite(movie)}
                            className="absolute bottom-4 right-4 h-14 w-14 flex items-center justify-center bg-white/90 dark:bg-slate-900/90 rounded-full shadow-lg backdrop-blur-sm hover:scale-110 transition-transform group z-10"
                            title={favorited ? "Remove from Favorites" : "Add to Favorites"}
                        >
                            {favorited ? (
                                <span className="text-violet-600 text-3xl leading-none mt-1">★</span>
                            ) : (
                                <span className="text-slate-300 text-3xl leading-none mt-1">☆</span>
                            )}
                        </button>
                    </div>
                

                    {/* right side: details */}
                    <div className="flex-1 w-full max-w-[550px] lg:max-w-none flex flex-col space-y-8 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl transition-colors duration-300">
                        
                        {/* title & Stats */}
                        <div className="pb-2 border-b border-gray-100 dark:border-slate-700">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white pb-4 leading-tight">
                                {movie.title}
                            </h2>
                           <div className="grid grid-cols-2 gap-6 pt-2">
                                <div>
                                    <h4 className="text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-white mb-1">Released</h4>
                                    <p className="text-lg font-medium text-slate-900 dark:text-white">
                                        {movie.release_date || 'N/A'}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-white mb-1 duration-300">Rating</h4>
                                    <div className="flex items-center gap-2">
                                        <span className="text-yellow-500 text-xl">★</span>
                                        <p className="text-lg font-medium text-slate-900 dark:text-white">
                                            {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
                                            <span className="text-slate-400 text-sm font-normal ml-1"> / 10</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* genre */}
                        <div className="pb-2 pt-2">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 pb-2">Genres</h3>
                            <div className="flex flex-wrap gap-2">
                                {movie.genres?.map(genre => (
                                    <span key={genre.id} className="px-4 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full text-sm font-medium">
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Plot */}
                        <div className="pb-2 pt-2">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 pb-2">Synopsis</h3>
                            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                            {movie.overview}
                            </p>
                        </div>

                        {/* cast & directors grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* cast */}
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white pb-2">Top Cast</h3>
                                <ul className="space-y-2">
                                    {cast.length > 0 ? cast.slice(0, 5).map(actor => (
                                        <li key={actor.id} className="flex gap-2 items-center text-slate-600 dark:text-slate-300">
                                            <span className="w-1.5 h-1.5 bg-violet-600 rounded-full mr-2"></span>
                                            {actor.name}
                                        </li>
                                    )) : <li className="text-slate-400">No cast information available.</li>}
                                </ul>
                            </div>

                            {/* directors */}
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 pb-2 duration-300">Directors</h3>
                                <ul className="space-y-2">
                                    {directors.length > 0 ? directors.map(dir => (
                                        <li key={dir.id} className="flex gap-2 items-center text-slate-600 dark:text-slate-300">
                                            <span className="w-1.5 h-1.5 bg-violet-600 rounded-full mr-2"></span>
                                            {dir.name}
                                        </li>
                                    )) : <li className="text-slate-400">Unknown</li>}
                                </ul>
                            </div>
                        </div>

                        {/* trailer section */}
                        {trailer && (
                            <div className="pt-4">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 pb-2">Official Trailer</h3>
                                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${trailer.key}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;