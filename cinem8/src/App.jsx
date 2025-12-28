import { useState, useEffect, useCallback } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useTheme from "./hooks/useTheme";
import Home from "./pages/Home";
import Modal from "./components/Modal";
import { FavoriteProvider } from "./context/FavoritesContext";
import AboutPage from "./pages/AboutPage";
import FavoritePage from "./pages/FavoritePage";
import MovieDetails from "./pages/MovieDetails";
import NotFound404 from "./pages/NotFound404";
import "./index.css";
import "./App.css"
import ImageWithFallback from "./components/ImageWithFallback";

function App() {

  // state management and url persistance
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearchTerm = searchParams.get('q') || '';

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  const [hasSearched, setHasSearched] = useState(!!initialSearchTerm);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { theme, toggleTheme, isDarkMode } = useTheme();

  // implementing the TMDB
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  // tmdb api fetch function
  // usecallback memoizes the function to prevent unnecessary re-runs
  const searchMovies = useCallback(async (title) => {
    if (!title.trim()) {
      searchMovies([]);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      // TMDB API request
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          query: title,
          api_key: API_KEY
        }
      });

      const results = response.data.results;

      if (results && results.length > 0) {
        setMovies(results);
      } else {
        setMovies([]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch data. Please check your network or API key.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
      
  }, [API_KEY]); // dependency on API_KEY

  // effect to run initial search if 'q' is in the URL 
  useEffect(() => {
    if (initialSearchTerm) {
      searchMovies(initialSearchTerm);
      setHasSearched(true);
    }
  }, [searchMovies, initialSearchTerm]);

  // handler for search initiation (called by Navbar)
  const handleSearch = (term) => {
    setSearchTerm(term);

    // update url query parameter
    if (term.trim()) {
      setSearchParams({ q: term });
      setHasSearched(term);
      searchMovies(term);
    } else {
      setSearchParams({}); // clear query param if search is empty
      setMovies([]);
      setSearchTerm(false);
    }
  };

  // modal for details
  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const getModalImage = (movie) => {
    if (movie.backdrop_path) return `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`;
    if (movie.poster_path) return `https://image.tmdb.org/t/p/w780${movie.poster_path}`;
    return null;
  }

  // render structure
  return (
    <FavoriteProvider>
      <div className="App min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
    
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />

        <main className="w-full max-w-7xl max-width-[1000px] mx-auto px-8 py-8 pt-24 grow flex-col items-center">
          <div className="w-full">
            <Routes>
              <Route path="/" element={
                <Home
                  movies={movies}
                  loading={loading}
                  error={error}
                  searchTerm={searchTerm}
                  hasSearched={hasSearched}
                  setSearchTerm={setSearchTerm}
                  onSearch={handleSearch}
                  onMovieSelect={handleCardClick}
                />
              } />

              {/* dedicated routes */}
              <Route path="/favorites" element={<FavoritePage onMovieSelect={handleCardClick} />} />
              <Route path="/about" element={<AboutPage />} />
            
              <Route path="/movie/:id" element={<MovieDetails />} />

              <Route path="*" element={<NotFound404 />} />
            </Routes>
          </div>
        </main>

        <Footer />

        {/* modal integration */}
        <Modal
          isOpen={isModalOpen}
          onclose={() => setIsModalOpen(false)}
          selectedMovie={selectedMovie}
        >
        {selectedMovie ? (
            <div className="space-y-6">
              {/* details for view */}
              <div className="relative h-70 w-full rounded-xl overflow-hidden shadow-lg bg-slate-200 dark:bg-slate-800">
                <ImageWithFallback
                  src={getModalImage(selectedMovie)}
                  alt={searchMovies.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-6">
                  <h2 className="text-white text-3xl font-bold shadow-lg">{selectedMovie.title}</h2>
               </div>
              </div>

              <div className="h-5"></div>

              <div className="grid grid-cols-2 gap-4 text-sm">
              
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                  <span className="block text-slate-500 dark:text-slate-400 text-xs uppercase font-bold mb-1">Release Date</span>
                  <span className="text-slate-900 dark:text-white font-medium">{selectedMovie.release_date || 'Unknown'}</span>
                </div>

                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                  <span className="block text-slate-500 dark:text-slate-400 text-xs uppercase font-bold mb-1">Rating</span>
                  <span className="text-slate-900 dark:text-white font-medium">⭐ {selectedMovie.vote_average?.toFixed(1)} / 10</span>
                </div>

              </div>

              <div className="h-5"></div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Overview</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  {selectedMovie.overview || "No overview available for this title."}
                </p>
              </div>
            </div>
          ) : (
            <p className="p-8 text-center">Loading details...</p>
          )}
        </Modal>
      
      </div>
    </FavoriteProvider>
  );
}

export default App;