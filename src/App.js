import { useState } from 'react';
import './App.css';
import MovieForm from './MovieForm';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');
  const [director, setDirector] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [bgColor, setBgColor] = useState('blue');
  return (
    <div className="App">
      <p>{movieTitle}</p>
      <p>{director}</p>
      <p>{releaseDate}</p>
      <p>{bgColor}</p>
      <MovieForm 
        setAllMovies={setAllMovies}
        allMovies={allMovies}
        setMovieTitle={setMovieTitle}
        movieTitle={movieTitle}
        setDirector={setDirector}
        director={director}
        setReleaseDate={setReleaseDate}
        releaseDate={releaseDate}
        setBgColor={setBgColor}
        bgColor={bgColor}
      />
      {allMovies.map((movie, i) => {
        return <p className='movie' style={{ backgroundColor: movie.bgColor }} key={movie.title + i}>
          {movie.title} <br></br>
          {movie.director} <br></br>
          {movie.releaseDate} <br></br>
        </p>;
      })}
    </div>
  );
}

export default App;
