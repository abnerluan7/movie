import { createContext, useContext, useEffect, useState } from 'react'
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
  addMoreItems: () => void
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export interface MyProps {
  children?: React.ReactNode
}

export function getInitialSize(): number {
  const sizeList =
    Math.ceil(window.innerWidth / 305) * Math.ceil(window.innerHeight / 220)
  return sizeList < 20 ? 20 : sizeList
}

const MoviesContext = createContext<TypesThisContext>({} as TypesThisContext)

export const MoviesProvider: React.FC<MyProps> = ({ children }) => {
  const { isLoading, data, refetch, isSuccess } = useQuery<
    HttpResponse<IMovies[]>
  >(keys.MOVIE_LIST, async () => getAllMovies({ size, search }))
  const [size, setSize] = useState<number>(getInitialSize())
  const [search, setSearch] = useState<string>('')

  const addMoreItems = (): void => {
    setSize((prevSize) => prevSize + getInitialSize())
  }

  useEffect(() => {
    refetch()
  }, [size, search])

  return (
    <MoviesContext.Provider
      value={{
        isLoading,
        movies: data,
        refetch,
        isSuccess,
        addMoreItems,
        setSearch
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
