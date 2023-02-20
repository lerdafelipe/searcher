import { useState, useRef } from 'react'
import { searchMovies } from './../logic/movies'

export const useMovies = ({ search }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorSearch, setErrorSearch] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = async () => {
    if (previousSearch.current === search) return

    setLoading(true)
    try {
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
      setErrorSearch(null)
    } catch {
      setErrorSearch('Error searching movies')
    } finally {
      // el finally se ejecuta en el try y en el catch
      setLoading(false)
    }
  }
  return { movies, getMovies, loading, errorSearch }
}
