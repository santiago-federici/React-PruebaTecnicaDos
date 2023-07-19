import moviesFound from '../mocks/moviesFound.json'
// import noMoviesFound from './mocks/noMoviesFound.json'

export function CardsContainer() {

  const movies = moviesFound.Search
  const hasMovies = movies?.length > 0

    return (
        <article className='cards-container'>
        {
          hasMovies
          ?
          (
            movies.map(movie => (
              <section className='card' key={movie.imdbID}>
                <img className='card-image' src={movie.Poster} alt={movie.Title} />
                <h2 className='card-title'>{movie.Title}</h2>
                <p>{movie.Year}</p>
              </section>
            ))
          )
          :
          <h2>No movies were found</h2>
        }
      </article>
    )
}