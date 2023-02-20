import {
  Box,
  BoxHorizontal,
  Button,
  Container,
  Header,
  Inner,
  Logo,
  Text,
  TextLittle,
} from './styles/sidebar'
import logo from '../../images/Leboncoin.png'

export const SideBar = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}

SideBar.Box = ({ children, ...restProps }) => {
  return <Box {...restProps}>{children}</Box>
}

SideBar.BoxHorizontal = ({ children, ...restProps }) => {
  return <BoxHorizontal {...restProps}>{children}</BoxHorizontal>
}

SideBar.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>
}

SideBar.Inner = ({ children, ...restProps }) => {
  return <Inner {...restProps}>{children}</Inner>
}

SideBar.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>
}

SideBar.Logo = ({ children, ...restProps }) => {
  return (
    <Logo {...restProps}>
      <img src={logo} alt='leboncoin logo' />
    </Logo>
  )
}

SideBar.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}

SideBar.TextLittle = ({ children, ...restProps }) => {
  return <TextLittle {...restProps}>{children}</TextLittle>
}
