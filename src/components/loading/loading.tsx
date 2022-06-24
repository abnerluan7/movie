import ClipLoader from 'react-spinners/ClipLoader'

import { Container } from './loading-styles'
export const Loading = () => {
  return (
    <Container>
      <ClipLoader color='#ffffff' loading={true} size={150} />
    </Container>
  )
}
