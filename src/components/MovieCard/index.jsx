import React from 'react'
import './MovieCard.css'

const MovieCard = ({ movie }) => {
  return (
    <div className='movie-item'>
      <li>
        <div className='card-image-container'>
          <img src={movie.poster} alt={movie.title} />
        </div>
        <div className='card-content-container'>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
        </div>
      </li>
    </div>
  )
}

export default MovieCard
