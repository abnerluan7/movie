import { QueryClient, QueryClientProvider } from 'react-query'

import { waitFor } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import { MoviesProvider, useMovies, MyProps } from './useMovies'

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
})
