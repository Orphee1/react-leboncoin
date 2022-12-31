import {
  Box,
  BoxVertical,
  Button,
  ButtonVertical,
  Center,
  Container,
  HambMenu,
  List,
  ListHover,
  ListHoverHidden,
  Logo,
  LogoSmallScreen,
  Row,
  SubLinks,
} from './styles/header'
import { GiHamburgerMenu } from 'react-icons/gi'

import logo from '../../images/Leboncoin.png'

export const Header = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}

Header.Box = ({ children, ...restProps }) => {
  return <Box {...restProps}>{children}</Box>
}

Header.BoxVertical = ({ children, ...restProps }) => {
  return <BoxVertical {...restProps}>{children}</BoxVertical>
}

Header.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>
}

Header.ButtonVertical = ({ children, ...restProps }) => {
  return <ButtonVertical {...restProps}>{children}</ButtonVertical>
}

Header.Center = ({ children, ...restProps }) => {
  return <Center {...restProps}>{children}</Center>
}

Header.HambMenu = ({ ...restProps }) => {
  return (
    <HambMenu {...restProps}>
      <GiHamburgerMenu />
    </HambMenu>
  )
}

Header.List = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>
}

Header.ListHover = ({ children, ...restProps }) => {
  return <ListHover {...restProps}>{children}</ListHover>
}

Header.ListHoverHidden = ({ text, sublinks, children, ...restProps }) => {
  return (
    <ListHoverHidden {...restProps}>
      <Button>{text}</Button>
      <span>•</span>
      <Header.SubLinks>
        {sublinks.map((item, i) => {
          return <p key={i}>{item}</p>
        })}
      </Header.SubLinks>
    </ListHoverHidden>
  )
}

Header.Logo = ({ children, ...restProps }) => {
  return (
    <Logo {...restProps}>
      <img src={logo} alt='leboncoin logo' />
    </Logo>
  )
}

Header.LogoSmallScreen = ({ children, ...restProps }) => {
  return (
    <LogoSmallScreen {...restProps}>
      <img src={logo} alt='leboncoin logo' />
    </LogoSmallScreen>
  )
}

Header.Row = ({ children, ...restProps }) => {
  return <Row {...restProps}>{children}</Row>
}

Header.SubLinks = ({ children, ...restProps }) => {
  return <SubLinks {...restProps}>{children}</SubLinks>
}
