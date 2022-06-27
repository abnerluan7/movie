import { QueryClient, QueryClientProvider } from 'react-query'

import { waitFor } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import { MoviesProvider, useMovies, MyProps, getInitialSize } from './useMovies'

describe('App Movies List', () => {
  const queryClient = new QueryClient()
  const wrapper = ({ children }: MyProps) => (
    <QueryClientProvider client={queryClient}>
      <MoviesProvider>{children}</MoviesProvider>
    </QueryClientProvider>
  )
  const { result } = renderHook(() => useMovies(), { wrapper })
  it('should render list Movies', async () => {
    await waitFor(() => {
      if (result.current.isLoading) {
        expect(result.current.isLoading).toBeTruthy()
      } else {
        expect(result.current.movies?.data?.length).toBeGreaterThanOrEqual(1)
      }
    })
  })

  it('should get initial size list', async () => {
    expect(getInitialSize()).toBeGreaterThanOrEqual(20)
  })

  it('should when add more items check is ok', async () => {
    await waitFor(async () => {
      if (!result.current.isLoading) {
        const previusLenght = result.current.movies?.data?.length
        result.current.addMoreItems()
        await waitFor(() => {
          expect(result.current.movies?.data?.length).toBeGreaterThanOrEqual(
            previusLenght
          )
        })
      }
    })
  })

  it('should when search items check is ok', async () => {
    await waitFor(async () => {
      if (!result.current.isLoading) {
        result.current.setSearch('movie that will never exist')
        await waitFor(() => {
          expect(result.current.movies?.data?.length).toBeLessThanOrEqual(1)
        })
      }
    })
  })
})
