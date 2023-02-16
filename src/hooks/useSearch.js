import { useState, useEffect, useRef } from 'react'

export const useSearch = () => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  const Submit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const value = data.get('search')
    console.log(value)
  }

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

    if (query.length < 3) {
      setError('No se puede ejecutar una query con menos de tres caracteres')
      return
    }

    setError(null)
  }, [query])

  return { error, query, Submit, Change }
}
