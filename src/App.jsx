import './App.css'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'

// const API = `https://www.omdbapi.com/?apikey=%${process.env.API_KEY}&s=the%20end`

const App = () => {
  const { movies: MappedMovies } = useMovies()

  return (
    <div>
      <h2>App movie searcher</h2>
      <form>
        <input name='search' placeholder='Avengers, Spiderman, Star Wars...' />
        <button>Search</button>
      </form>
      <section>
        <Movies MappedMovies={MappedMovies} />
      </section>
    </div>
  )
}

export default App
