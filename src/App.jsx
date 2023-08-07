import { MoviesContainer } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { useCallback } from 'react'
import debounce from 'just-debounce-it'

import './App.css'

function App() {
  const { search, setSearch, error} = useSearch()
  const { movies, getMovies } = useMovies({search})

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , [getMovies])


  const handleSubmit = (e) => {
    e.preventDefault()   
    getMovies() 
  }
  
  const handleChange = (e) => {
    const newSearch = e.target.value
    if(newSearch.startsWith(' ')) return
    setSearch(newSearch)
    debouncedGetMovies(newSearch) 
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
