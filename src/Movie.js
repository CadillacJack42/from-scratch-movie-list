import React from 'react';

export default function Movie({
  id,
  title,
  director,
  releaseDate,
  bgColor,
  handleDelete,
}) {
  return <div className='movie' onClick={() => handleDelete && handleDelete(id)} style={{ backgroundColor: bgColor }}>
    <h2>{title}</h2>
    <p>
        Directed By: {director}<br></br>
        Release Date: {releaseDate}<br></br>
    </p>
  </div>;
}
