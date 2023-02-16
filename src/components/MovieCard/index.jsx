import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div>
      <li>
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <img src={movie.poster} alt={movie.title} />
      </li>
    </div>
  )
}

export default MovieCard
