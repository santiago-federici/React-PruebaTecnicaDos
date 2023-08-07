const apiKey = 'eafc75c0'

export const findMovies = async ({ search }) => {

    if(search == '') return null

    try{

        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`)
        const json = await response.json()
        
        const movies = json.Search
        
        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            poster: movie.Poster,
            year: movie.Year
        }))
    } catch(e){
        throw new Error('Error finding movies')
    }
}