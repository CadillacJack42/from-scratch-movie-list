import React from 'react';
import Movie from './Movie';

export default function MovieList({ allMovies }) {
  return <div className='movie-list'>
    {allMovies.map((movie, i) => {
      return (
        <Movie 
          key={movie + i}
          title={movie.title}
          director={movie.director}
          releaseDate={movie.releaseDate}
          bgColor={movie.bgColor}
        />
      );
    })}
  </div>;
}
