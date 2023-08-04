// import { useEffect } from 'react'

function MoviesFound({movies}) {
  return(
      movies.map(movie => (
        <section className='card' key={movie.id}>
          <img className='card-image' src={movie.poster} alt={movie.title} />
          <h2 className='card-title'>{movie.titlte}</h2>
          <p>{movie.year}</p>
        </section>
    ))
  )
}

function NoMoviesFound() {
  return(
    <h2>No movies were found</h2>
  )
}

// import noMoviesFound from './mocks/noMoviesFound.json'
import moviesFound from '../mocks/moviesFound.json'

export function MoviesContainer() {
  const movies = moviesFound.Search
  const hasMovies = movies?.length > 0

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster,
    year: movie.Year
  }))

  // const APIKEY = "eafc75c0"


  // useEffect(() => {
    // test()
  // }, []);

    return (
      <article className='cards-container'>
        {
          hasMovies
          ? <MoviesFound movies={mappedMovies} />
          : <NoMoviesFound />
        }   
      </article>
    )
}




// const movieToSerach = 'Avengers'
// const test = async () => {
//   const response = await fetch(`http://www.omdbapi.com/?apikey=eafc75c0&s=${movieToSerach}`)
//   const data = await response.json()
//   const { imdbID, poster, title, year } = data
//   return { imdbID, poster, title, year }
// }
