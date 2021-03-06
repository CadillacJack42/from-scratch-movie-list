import { useEffect, useState } from 'react';
import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Preview from './Preview';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');
  const [director, setDirector] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [bgColor, setBgColor] = useState('blue');
  const [filterQuery, setFilterQuery] = useState('');
  const [filteredMovieList, setFilteredMovieList] = useState([]);


  // USEEFFECT IS HANDLEFILTERMOVIE FUNCTION IN RUBRIC
  useEffect(() => {
    if (filterQuery) {
      const filteredMovies = allMovies.filter(movie => movie.title.includes(filterQuery));
      setFilteredMovieList(filteredMovies);
    } else setFilteredMovieList([...allMovies]);
  }, [filterQuery, allMovies]);
    
  const resetForm = () => {
    setBgColor('blue');
    setReleaseDate('');
    setDirector('');
    setMovieTitle('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: allMovies.length + 1,
      title: movieTitle,
      director: director,
      releaseDate: releaseDate,
      bgColor: bgColor,
    };
    setAllMovies([...allMovies, newMovie]);
    resetForm();
  };

  const handleDeleteMovie = (id) => {
    const movieIndex = allMovies.findIndex(movie => movie.id === id);
    allMovies.splice(movieIndex, 1);
    setAllMovies([...allMovies]);
  };

  return (
    <div className="App">
      <Preview 
        title={movieTitle}
        director={director}
        releaseDate={releaseDate}
        bgColor={bgColor}
      />
      
      <MovieForm 
        setMovieTitle={setMovieTitle}
        movieTitle={movieTitle}
        setDirector={setDirector}
        director={director}
        setReleaseDate={setReleaseDate}
        releaseDate={releaseDate}
        setBgColor={setBgColor}
        handleSubmit={handleSubmit}
      />

      <label>
        Filter by Title
        <input onChange={(e) => setFilterQuery(e.target.value)}></input>
      </label>

      <MovieList 
        allMovies={filteredMovieList.length ? filteredMovieList : allMovies}
        handleDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;
