import { useState, useEffect, useRef } from 'react'

export const useSearch = () => {
  const [query, setQuery] = useState('')
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  const Change = (e) => {
    const currentQuery = e.target.value
    if (currentQuery.startsWith(' ')) return
    setQuery(e.target.value)
  }

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      return
    }

    if (query === '') {
      setError('No se puede ejecutar una query vacía')
      return
    }

    if (query.match(/^\d+$/)) {
      setError('No se puede ejecutar una query con un número')
      return
    }

    if (query.length <= 3) {
      setError('No se puede ejecutar una query con menos de tres caracteres')
      return
    }

    setSearch(query)

    setError(null)
  }, [query])

  return { error, query, Change, search }
}
