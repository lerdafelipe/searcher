import './App.css'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

const App = () => {
  const { query, error, Change, search } = useSearch()
  const { movies: MappedMovies, getMovies, loading } = useMovies({ search })

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }

  const handleChange = (e) => {
    Change(e)
    getMovies({ search: e.target.value })
  }

  return (
    <div>
      <h2>App movie searcher</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query} name='search' placeholder='Avengers, Spiderman, Star Wars...' />

      </form>
      {error ? <p style={{ color: 'red' }}>{error}</p> : ''}
      <section>

        {loading ? <div className='loader'><div /></div> : ''}

        <Movies MappedMovies={MappedMovies} />

      </section>
    </div>
  )
}

export default App
