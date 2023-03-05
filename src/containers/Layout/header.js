import { Header } from '../../components'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../store/ui-slice'
// icons
import { GoDiffAdded, GoSearch } from 'react-icons/go'
import { BsBell } from 'react-icons/bs'
import { FaRegHeart } from 'react-icons/fa'
import { MdOutlineMessage } from 'react-icons/md'
import { RiUserLine } from 'react-icons/ri'
import { categories } from '../../constants/categories'

export const HeaderContainer = () => {
  const { isLoggedIn, userName } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const toggleSideBarHandler = () => {
    dispatch(uiActions.toggleSideBar())
  }

  const showProfile = isLoggedIn && userName

  return (
    <Header>
      <Header.HambMenu onClick={toggleSideBarHandler} />
      <NavLink to='/offers'>
        <Header.LogoSmallScreen />
      </NavLink>
      <Header.Center>
        <Header.Row>
          <Header.List>
            <Header.Box>
              <Header.List>
                <NavLink to='/offers'>
                  <Header.Logo />
                </NavLink>
              </Header.List>
              <Header.List>
                <NavLink to='/publish'>
                  <Header.Button orange br>
                    <GoDiffAdded />
                    Déposer une annonce
                  </Header.Button>
                </NavLink>
              </Header.List>
              <Header.ListHover hover_orange>
                <Header.Button>
                  <GoSearch />
                  Rechercher
                </Header.Button>
              </Header.ListHover>
            </Header.Box>
          </Header.List>
          <Header.List>
            <Header.Box>
              <Header.ListHover hover_orange>
                <Header.ButtonVertical>
                  <BsBell />
                  Mes recherches
                </Header.ButtonVertical>
              </Header.ListHover>
              <Header.ListHover hover_orange>
                <Header.ButtonVertical>
                  <FaRegHeart />
                  Favoris
                </Header.ButtonVertical>
              </Header.ListHover>
              <Header.ListHover hover_orange>
                <Header.ButtonVertical>
                  <MdOutlineMessage />
                  Messages
                </Header.ButtonVertical>
              </Header.ListHover>
              {!showProfile && (
                <Header.ListHover hover_orange>
                  <NavLink to='/user/sign_in'>
                    <Header.ButtonVertical>
                      <RiUserLine />
                      Se connecter
                    </Header.ButtonVertical>
                  </NavLink>
                </Header.ListHover>
              )}
              {showProfile && (
                <Header.ListHover hover_orange>
                  <NavLink to='/profile'>
                    <Header.ButtonVertical>
                      <RiUserLine />
                      {userName}
                    </Header.ButtonVertical>
                  </NavLink>
                </Header.ListHover>
              )}
            </Header.Box>
          </Header.List>
        </Header.Row>
        <Header.Row>
          {categories.map(({ id, text, sublinks }) => (
            <Header.ListHoverHidden key={id} text={text} sublinks={sublinks} />
          ))}
        </Header.Row>
      </Header.Center>
    </Header>
  )
}
