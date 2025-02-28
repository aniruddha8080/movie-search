import React, { useState } from 'react';
import axios from 'axios';
import MovieDetails from './components/MovieDetails';
import WelcomeScreen from './components/WelcomeScreen';
import './styles/App.css'
import './styles/Styles.css'
import './styles/MovieDetails.css'
const App = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState(null);
  const searchMovie = async () => {
    if (!query) return;
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?t=${query}&apikey=c54014f6`
      );
      setMovie(response.data);
    } catch (error) {
      console.error('Error fetching movie:', error);
    }
  };

  if (!showSearch) {
    return <WelcomeScreen onStart={() => setShowSearch(true)} />;
  }

  return (
    <div className="app">
      <h1>🎥 Movie Search</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchMovie}>Search</button>
      </div>
      {movie && <MovieDetails movie={movie} />}
    </div>
  );
};

export default App;
