import moviesFound from '../mocks/moviesFound.json'

export function useMovies() {
  const movies = moviesFound.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster,
    year: movie.Year
  }))

  return { movies: mappedMovies }
}