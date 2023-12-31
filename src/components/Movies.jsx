function MoviesFound({movies}) {
  return(
    <article className='cards-container'>
      {
        movies.map(movie => (
          <section className='card' key={movie.id}>
            <img className='card-image' src={movie.poster} alt={movie.title} />
            <h2 className='card-title'>{movie.title}</h2>
            <p>{movie.year}</p>
          </section>
        ))
      }
    </article>

  )
}

function NoMoviesFound() {
  return(
    <h2>No movies were found</h2>
  )
}

// import noMoviesFound from './mocks/noMoviesFound.json'

export function MoviesContainer({movies}) {
  
  const hasMovies = movies?.length > 0
  
  // const APIKEY = "eafc75c0"

    return (

      hasMovies
      ? <MoviesFound movies={movies} />
      : <NoMoviesFound />
       
    )
}