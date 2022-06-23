export type Movies = {
  title: string
  director: string
  description: string
  year: string
  coverImage: string
}

export interface IMovies extends Movies {
  id: number
}
