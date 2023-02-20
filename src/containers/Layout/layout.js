import { Fragment } from 'react'
import { FooterContainer } from './footer'
import { HeaderContainer } from './header'
import { SideBarContainer } from './sidebar'

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <HeaderContainer />
      <SideBarContainer />
      {children}
      <FooterContainer />
    </Fragment>
  )
}
