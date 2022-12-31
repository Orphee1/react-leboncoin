import { FiHeart } from 'react-icons/fi'
import {
  Box,
  BoxImage,
  BoxInfo,
  Container,
  HeartIcon,
  Image,
  Text,
  Title,
} from './styles/card'

export const Card = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}

Card.Box = ({ children, ...restProps }) => {
  return <Box {...restProps}>{children}</Box>
}

Card.BoxImage = ({ children, ...restProps }) => {
  return <BoxImage {...restProps}>{children}</BoxImage>
}

Card.BoxInfo = ({ children, ...restProps }) => {
  return <BoxInfo {...restProps}>{children}</BoxInfo>
}

Card.HeartIcon = ({ ...restProps }) => {
  return (
    <HeartIcon {...restProps}>
      <FiHeart />
    </HeartIcon>
  )
}

Card.Image = ({ ...restProps }) => {
  return <Image {...restProps} />
}

Card.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}

Card.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
