import './App.css'

import { MoviesContainer } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App() {
  const { search, setSearch, error} = useSearch()
  const { movies, getMovies } = useMovies({search})


  const handleSubmit = (e) => {
    e.preventDefault()   
    getMovies() 
  }
  
  const handleChange = (e) => {
    const newSearch = e.target.value
    if(newSearch.startsWith(' ')) return
    setSearch(newSearch)

    
  }

  return (
    <main className='app-main'>
      <form onSubmit={handleSubmit} className='serachbox'>
        <input onChange={handleChange} value={search} placeholder='movies...' />
        <button>Search</button>
        <p>{error}</p>
      </form>

      <MoviesContainer movies={movies} />
    </main>
  )
}

export default App
