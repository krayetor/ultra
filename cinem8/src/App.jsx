import { useState, useEffect, useCallback } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import Header from "./components/Header";
import useTheme from "./hooks/useTheme";
import Home from "./pages/Home";
// import AboutPage from "./pages/AboutPage";
// import FavoritePage from "./pages/FavoritePage";
// import MovieDetails from "./pages/MovieDetails";
// import NotFound404 from "./pages/NotFound404";
import "./index.css";
import "./App.css"

function App() {

  // state management and url persistance
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearchTerm = searchParams.get('q') || '';

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { theme, toggleTheme, isDarkMode } = useTheme();

  // implementing the TMDB
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  // tmdb api fetch function
  // usecallback memoizes the function to prevent unnecessary re-runs
  const searchMovies = useCallback(async (title) => {
    if (!title.trim()) {
      searchMovies([]);
      setError("Please enter a movie title to search.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      // TMDB API request
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${API_KEY}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // handle TMDB success (uses 'results' array)
      if(data.results && data.results.length > 0) {
        setMovies(data.results);
      } else {
        setMovies([]);
        setError("No movies found matching your search.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch data. Please check your network or API key.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, [API_KEY]); // dependency on API_KEY

  // persistence handlers

  // effect to run initial search if 'q' is in the URL 
  useEffect(() => {
    if (initialSearchTerm) {
      searchMovies(initialSearchTerm);
    }
  }, [searchMovies, initialSearchTerm]);

  // handler for search initiation (called by Navbar)
  const handleSearch = (term) => {
    setSearchTerm(term);

    // update url query parameter
    if (term.trim()) {
      setSearchParams({ q: term });
    } else {
      setSearchParams({}); // clear query param if search is empty
    }

    searchMovies(term);
  };

  // render structure
  return (
    <div className="App min-h-screen bg-gray-50 dark:bg-gray-900">
    
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home
            movies={movies}
            loading={loading}
            error={error}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={handleSearch}
          />} />

          {/* dedicated routes */}
          {/* <Route path="/favorites" element={<FavoritePage />} /> */}
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
          {/* <Route path="*" element={<NotFound404 />} /> */}
        </Routes>
      </main>
    </div>
  );
};

export default App;