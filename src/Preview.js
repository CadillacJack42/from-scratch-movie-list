import React from 'react';
import Movie from './Movie';

export default function Preview({
  title,
  director,
  releaseDate,
  bgColor,
}) {
  if (title || director || releaseDate) {
    return (<div>
      <Movie 
        title={title}
        director={director}
        releaseDate={releaseDate}
        bgColor={bgColor}
      />
    </div>);
  } else return null;
  
}
