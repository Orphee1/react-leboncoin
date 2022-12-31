import { Fragment } from 'react'
import {
  Box,
  Column,
  Container,
  Image,
  ImageBox,
  Line,
  Link,
  LinkBox,
  Row,
  RowNone,
  RowBetween,
  RowGrid,
  Select,
  Text,
  Title,
} from './styles/footer'

export const Footer = ({ children }) => {
  return <Container> {children} </Container>
}

Footer.Box = ({ children }) => {
  return <Box> {children} </Box>
}

Footer.Column = ({ children }) => {
  return <Column> {children} </Column>
}

Footer.Image = ({ src, alt }) => {
  return <Image src={src} alt={alt} />
}

Footer.ImageBox = ({ children }) => {
  return <ImageBox> {children} </ImageBox>
}

Footer.Line = () => {
  return <Line />
}

Footer.Link = ({ children, href }) => {
  return <Link href={href}> {children} </Link>
}

Footer.LinkBox = ({ children, ...restProps }) => {
  return <LinkBox {...restProps}> {children} </LinkBox>
}

Footer.Row = ({ children }) => {
  return <Row> {children} </Row>
}

Footer.RowBetween = ({ children }) => {
  return <RowBetween> {children} </RowBetween>
}

Footer.RowNone = ({ children }) => {
  return <RowNone> {children} </RowNone>
}

Footer.RowGrid = ({ children }) => {
  return <RowGrid> {children} </RowGrid>
}

Footer.Select = () => {
  return (
    <Select>
      <option value='France'>France</option>
      <option value='Allemagne'>Allemagne</option>
      <option value='Afrique du Sud'>Afrique du Sud</option>
      <option value='Autriche'>Autriche</option>
      <option value='Belgique'>Belgique</option>
      <option value='Espagne'>Espagne</option>
      <option value='Hongrie'>Hongrie</option>
    </Select>
  )
}

Footer.Text = ({ children }) => {
  return <Text>{children}</Text>
}

Footer.Title = ({ children }) => {
  return (
    <Fragment>
      <Title> {children} </Title>
      <Line />
    </Fragment>
  )
}
