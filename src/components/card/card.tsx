import { IMovies } from '@/types/Movies'

import {
  Container,
  Title,
  SubTitle,
  Text,
  Meta,
  Entities,
  Item,
  Image,
  CardHeader
} from './card-styles'

type Props = {
  children: React.ReactNode
  Search: React.FC
}

export const ContainerCard = ({ children, Search }: Props) => {
  return (
    <Container>
      <CardHeader>
        <Title>Movies</Title>
        <Search />
      </CardHeader>
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
        <SubTitle>
          {movie.title} - {movie.year}
        </SubTitle>
        <Text>
          {movie.description} - {movie.director}
        </Text>
      </Meta>
    </Item>
  )
}
