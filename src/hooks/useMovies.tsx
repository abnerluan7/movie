import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from 'react'
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useQuery
} from 'react-query'

import { keys } from '@/helpers/queryKeys'

import { getAllMovies } from '@/services/MovieService'

import { HttpResponse } from '@/types/Http'
import { IMovies } from '@/types/Movies'
interface TypesThisContext {
  isLoading: boolean
  movies: HttpResponse<IMovies[]>
  refetch: <TPageData>(
    options?: RefetchOptions & RefetchQueryFilters<TPageData>
  ) => Promise<QueryObserverResult<HttpResponse<IMovies[], any>, unknown>>
  isSuccess: boolean
  movie: IMovies | undefined
  setMovie: Dispatch<SetStateAction<IMovies>>
}

export interface MyProps {
  children?: React.ReactNode
}

const MoviesContext = createContext<TypesThisContext>({} as TypesThisContext)

export const MoviesProvider: React.FC<MyProps> = ({ children }) => {
  const { isLoading, data, refetch, isSuccess } = useQuery<
    HttpResponse<IMovies[]>
  >(keys.MOVIE_LIST, getAllMovies)

  const [movie, setMovie] = useState<IMovies | undefined>(undefined)

  return (
    <MoviesContext.Provider
      value={{
        isLoading,
        movies: data,
        refetch,
        isSuccess,
        movie,
        setMovie
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}

export const useMovies = () => {
  const useMoviesContext = useContext(MoviesContext)

  return useMoviesContext
}
