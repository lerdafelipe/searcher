import './App.css'

// const API = `https://www.omdbapi.com/?apikey=%${process.env.API_KEY}&s=the%20end`

const App = () => {
  return (
    <div>
      <h2>App movie searcher</h2>
      <form>
        <input name='search' placeholder='Avengers, Spiderman, Star Wars...' />
        <button>Search</button>
      </form>
    </div>
  )
}

export default App
