import React from 'react';

export default function MovieForm({
  setAllMovies,
  allMovies,
  setMovieTitle,
  movieTitle,
  setDirector,
  director,
  setReleaseDate,
  releaseDate,
  setBgColor,
  bgColor,
}) {
  const handleTitleChange = (e) => {
    setMovieTitle(e.target.value);
  };
  const handleDirectorChange = (e) => {
    setDirector(e.target.value);
  };
  const handleReleaseChange = (e) => {
    setReleaseDate(e.target.value);
  };
  const handleColorChange = (e) => {
    setBgColor(e.target.value);
  };
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
  return <div>
    <form onSubmit={handleSubmit}>
      <label>
              Movie Title
        <input value={movieTitle} onChange={handleTitleChange}></input>
      </label>
      <label>
              Director
        <input value={director} onChange={handleDirectorChange}></input>
      </label>
      <label>
              Release Date
        <input value={releaseDate} onChange={handleReleaseChange}></input>
      </label>
      <label>
              Background Color
        <select onChange={handleColorChange}>
          <option value={'blue'}>Blue</option>
          <option value={'red'}>Red</option>
          <option value={'green'}>Green</option>
          <option value={'orange'}>Orange</option>
        </select>
      </label>
      <button type='submit'>Submit Movie</button>
    </form>
  </div>;
}
