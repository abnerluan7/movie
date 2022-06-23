import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import AuthenticatedLayout from '@/layouts/AuthenticatedLayout/AuthenticatedLayout'

import MoviesList from '@/pages/MoviesList/MoviesList'

import { MoviesProvider } from '@/hooks/useMovies'
const queryClient = new QueryClient()
const Root: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MoviesProvider>
        <AuthenticatedLayout>
          <Routes>
            <Route path='/' element={<MoviesList />} />
          </Routes>
        </AuthenticatedLayout>
      </MoviesProvider>
    </QueryClientProvider>
  )
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  )
}

export default App
