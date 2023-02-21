import { useState, useRef, useCallback } from 'react'
import { searchMovies } from './../logic/movies'

export const useMovies = ({ search }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorSearch, setErrorSearch] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (previousSearch.current === search || search.length <= 3) return

    setLoading(true)
    try {
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
      setErrorSearch(null)
    } catch {
      setErrorSearch('Error searching movies')
    } finally {
      setLoading(false)
    }
  }, [])

  return { movies, getMovies, loading, errorSearch }
}
