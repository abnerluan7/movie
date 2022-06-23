import { IMovies } from '@/types/Movies'

import { useMovies } from '@/hooks/useMovies'

const MoviesList: React.FC = () => {
  const { movies, setMovie } = useMovies()

  const showMovie = (movie: IMovies) => {
    setMovie(movie)
  }

  return (
    <div>
      {movies.data.map((movie) => (
        <button key={movie.id} onClick={() => showMovie(movie)}>
          {movie.title}
        </button>
      ))}
      <p>Movie List</p>
    </div>
  )
}

export default MoviesList
