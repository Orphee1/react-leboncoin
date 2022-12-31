import { Container } from './styles/offers'

export const OffersBox = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}
