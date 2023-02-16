import './App.css'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

// const API = `https://www.omdbapi.com/?apikey=%${process.env.API_KEY}&s=the%20end`

const App = () => {
  const { movies: MappedMovies } = useMovies()
  const { query, error, Submit, Change } = useSearch()

  const handleSubmit = (e) => {
    Submit(e)
  }

  const handleChange = (e) => {
    Change(e)
  }

  return (
    <div>
      <h2>App movie searcher</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query} name='search' placeholder='Avengers, Spiderman, Star Wars...' />
        <button>Search</button>
      </form>
      {error ? <p style={{ color: 'red' }}>{error}</p> : ''}
      <section>
        <Movies MappedMovies={MappedMovies} />
      </section>
    </div>
  )
}

export default App
