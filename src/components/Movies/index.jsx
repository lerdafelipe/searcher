import React from 'react'
import MovieCard from '../MovieCard'
import './Movies.css'

function NoMovies () {
  return (
    <p>No se han encontrado resultados</p>
  )
}

const MovieList = ({ movies }) => {
  return (
    <ul className='movies-container'>
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </ul>
  )
}

const Movies = ({ MappedMovies }) => {
  const hasMovies = MappedMovies?.length > 0

  return (
    <div>
      {hasMovies
        ? <MovieList movies={MappedMovies} />
        : <NoMovies />}
    </div>
  )
}

export default Movies
