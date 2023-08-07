import { useState } from 'react'
import { findMovies } from '../services/movies.js'

export function useMovies({search}) {
  const [movies, setMovies] = useState([])
  

  const getMovies = async () => {
    const newMovies = await findMovies({search})
    setMovies(newMovies)
  }

  return { movies, getMovies }
}