import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../store/ui-slice'
// component
import { SideBar } from '../../components'
// icons
import { ImCross } from 'react-icons/im'
import { GoSearch } from 'react-icons/go'
import { BsBell } from 'react-icons/bs'
import { FaRegHeart, FaChevronRight } from 'react-icons/fa'
import { MdOutlineMessage } from 'react-icons/md'
import { AiOutlinePlusSquare } from 'react-icons/ai'

import { categories } from '../../constants/categories'

export const SideBarContainer = () => {
  const sideBarIsOpen = useSelector((state) => state.ui.sideBarIsOpen)
  const dispatch = useDispatch()

  const handleClickCloseButton = () => {
    dispatch(uiActions.toggleSideBar())
  }

  return (
    <SideBar show={`${sideBarIsOpen && 'visible'}`}>
      <SideBar.Inner>
        <SideBar.Button onClick={handleClickCloseButton}>
          <ImCross />
        </SideBar.Button>
        <SideBar.Header>
          <SideBar.Logo />
        </SideBar.Header>
        <SideBar.Box>
          <NavLink to='/publish'>
            <SideBar.BoxHorizontal onClick={handleClickCloseButton}>
              <AiOutlinePlusSquare />
              <SideBar.Text>Déposer une annonce</SideBar.Text>
            </SideBar.BoxHorizontal>
          </NavLink>
          <NavLink to='/offers'>
            <SideBar.BoxHorizontal
              orange
              svgClr='orange'
              onClick={handleClickCloseButton}
            >
              <GoSearch />
              <SideBar.Text orange>Rechercher</SideBar.Text>
            </SideBar.BoxHorizontal>
          </NavLink>
        </SideBar.Box>
        <SideBar.Box>
          <SideBar.BoxHorizontal>
            <MdOutlineMessage />
            <SideBar.Text>Messages</SideBar.Text>
          </SideBar.BoxHorizontal>
          <SideBar.BoxHorizontal>
            <FaRegHeart />
            <SideBar.Text>Favoris</SideBar.Text>
          </SideBar.BoxHorizontal>
          <SideBar.BoxHorizontal>
            <BsBell />
            <SideBar.Text>Recherches sauvegardées</SideBar.Text>
          </SideBar.BoxHorizontal>
        </SideBar.Box>
        <SideBar.Box>
          <SideBar.BoxHorizontal>
            <SideBar.TextLittle fs='12px' color='hsl(210, 11%, 62%)'>
              Catégories
            </SideBar.TextLittle>
          </SideBar.BoxHorizontal>
          {categories.map((cat) => (
            <SideBar.BoxHorizontal key={cat.id}>
              <SideBar.TextLittle>{cat.text}</SideBar.TextLittle>
            </SideBar.BoxHorizontal>
          ))}
          <NavLink to='/user/sign_in'>
            <SideBar.BoxHorizontal mt='10px' onClick={handleClickCloseButton}>
              <SideBar.Text orange>Se connecter</SideBar.Text>
            </SideBar.BoxHorizontal>
          </NavLink>
        </SideBar.Box>
        <SideBar.Box>
          <SideBar.BoxHorizontal svgClr='hsl(200, 10%, 79%)'>
            <SideBar.Text>Informations pratiques</SideBar.Text>
            <FaChevronRight />
          </SideBar.BoxHorizontal>
          <SideBar.BoxHorizontal svgClr='hsl(200, 10%, 79%)'>
            <SideBar.Text>leboncoin</SideBar.Text>
            <FaChevronRight />
          </SideBar.BoxHorizontal>
        </SideBar.Box>
      </SideBar.Inner>
    </SideBar>
  )
}
