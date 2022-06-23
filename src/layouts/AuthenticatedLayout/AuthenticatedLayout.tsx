import React from 'react'

import { useMovies } from '@/hooks/useMovies'

type Props = {
  children: React.ReactNode
}

const AuthenticatedLayout = ({ children }: Props) => {
  const { isLoading } = useMovies()
  return (
    <div>
      {isLoading && <p>loading...</p>}
      {!isLoading && <div>{children}</div>}
    </div>
  )
}

export default AuthenticatedLayout
