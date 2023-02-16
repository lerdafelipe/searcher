import { useState, useEffect } from 'react'

// const API = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=the%20end`

export const useMovies = ({ query }) => {
  const [moviesDB, setMoviesDB] = useState([])

  const movies = moviesDB?.map(movie => ({
    id: movie.imdbID,
    poster: movie.Poster,
    title: movie.Title,
    year: movie.Year,
    type: movie.Type
  }))

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${query}`)
      .then(res => res.json())
      .then(data => setMoviesDB(data.Search))
  }, [query])

  return { movies }
}
