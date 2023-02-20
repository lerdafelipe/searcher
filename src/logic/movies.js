
export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${search}`)
    const json = await res.json()

    return json?.Search.map(movie => ({
      id: movie.imdbID,
      poster: movie.Poster,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type
    }))
  } catch {
    throw new Error('Error searching movies')
  }
}
