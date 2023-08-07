import { useRef, useState } from 'react'
import { findMovies } from '../services/movies.js'

export function useMovies({search}) {
  const [movies, setMovies] = useState([])
  const previousSearch = useRef(search)
  
  const getMovies = async () => {
    if(search == previousSearch.current) return
    previousSearch.current = search
    const newMovies = await findMovies({search})
    setMovies(newMovies)
  }

  return { movies, getMovies }
}