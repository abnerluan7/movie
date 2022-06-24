import React from 'react'

import { Loading } from '@/components'

import { useMovies } from '@/hooks/useMovies'

import { Container } from './styles'

type Props = {
  children: React.ReactNode
}

const AuthenticatedLayout = ({ children }: Props) => {
  const { isLoading } = useMovies()
  return (
    <Container>
      {isLoading && <Loading />}
      {!isLoading && <div>{children}</div>}
    </Container>
  )
}

export default AuthenticatedLayout
