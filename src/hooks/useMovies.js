import responseMovies from '../Mock/results.json'

export const useMovies = () => {
  const moviesDB = responseMovies.Search

  const movies = moviesDB?.map(movie => ({
    id: movie.imdbID,
    poster: movie.Poster,
    title: movie.Title,
    year: movie.Year,
    type: movie.Type
  }))

  return { movies }
}
