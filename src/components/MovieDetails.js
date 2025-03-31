import React from 'react';
const MovieDetails = ({ movie }) => {
  if (movie.Response === 'False') return 
  <p>Movie not found!</p>;
  return (
    <div className="movie-details">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Released:</strong> {movie.Released}</p>
      <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Director: </strong>{movie.Director}</p>
      <p><strong>Genre:</strong>{movie.Genre}</p>
    </div>
  );
};
export default MovieDetails;
