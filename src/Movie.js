import React from 'react';

export default function Movie({
  title,
  director,
  releaseDate,
  bgColor,
}) {
  return <div className='movie' style={{ backgroundColor: bgColor }}>
    <h2>{title}</h2>
    <p>
        Directed By: {director}<br></br>
        Release Date: {releaseDate}<br></br>
    </p>
  </div>;
}
