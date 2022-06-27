import { useEffect } from 'react'

import { ContainerCard, Card, Search } from '@/components'

import { useMovies } from '@/hooks/useMovies'

const MoviesList: React.FC = () => {
  const { movies, addMoreItems } = useMovies()
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      addMoreItems()
    }
  }

  return (
    <ContainerCard Search={Search}>
      {movies.data.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </ContainerCard>
  )
}

export default MoviesList
