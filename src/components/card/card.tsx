import { IMovies } from '@/types/Movies'

import {
  Container,
  Title,
  SubTitle,
  Text,
  Meta,
  Entities,
  Item,
  Image
} from './card-styles'

type Props = {
  children: React.ReactNode
}

export const ContainerCard = ({ children }: Props) => {
  return (
    <Container>
      <Title>Movies</Title>
      <Entities>{children}</Entities>
    </Container>
  )
}

type PropsCard = {
  movie: IMovies
}

export const Card = ({ movie }: PropsCard) => {
  return (
    <Item>
      <Image src={movie.coverImage} />
      <Meta>
        <SubTitle>{movie.title}</SubTitle>
        <Text>{movie.description}</Text>
      </Meta>
    </Item>
  )
}
