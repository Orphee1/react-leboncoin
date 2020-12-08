import React, {useContext} from 'react'
import '../main.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BiBell, BiHeart, BiMessageDetail, BiUser, BsPlusSquare, GiMagnifyingGlass, GoThreeBars, ImCross } from 'react-icons/all'

import logo from '../icons/logo.png'
import {ToggleContext} from "../context/toggleContext"

const Header = () => {
        const {toggleSearch, searchBoxOpen, toggleSide } = useContext(ToggleContext)
       
  return (
    <Wrapper>
      <div className='section'>
        <div className='nav-header'>
          <button className='btn'
        onClick={toggleSide}
          >
            <GoThreeBars fontSize='2rem' style={{ color: '#FF6E13' }} />
          </button>
          <img src={logo} alt='logo Leboncoin' />
          {searchBoxOpen ? (
         <button className="btn" 
          onClick={toggleSearch}
         >
          <ImCross 
          fontSize='2rem' style={{ color: '#939ea9' }} 
          />        
         </button>         
          ) : (
   <button className='btn'
     onClick={toggleSearch}
   >
          <GiMagnifyingGlass 
          fontSize='2rem' style={{ color: '#FF6E13' }} 
          />
          </button>
          )}
          
       
        </div>
        <div className='nav-header975'>
          <ul className="s-b logo-nav" >
            <li>
              <img src={logo} alt='logo Leboncoin' />
            </li>
            <li>
              <button className='btn'>
                      <BsPlusSquare 
                      fontSize="2rem"
                      style={{color: "white", marginRight: "0.5rem"}}
                      />
                      <span>Déposer une annonce</span>    
                      </button>
            </li>
            <li>
              <div className='s-b'>
             
                <span>Rechercher</span>
                   <GiMagnifyingGlass 
                fontSize='2rem' style={{ color: 'black', marginLeft: "0.5rem" }} 
                />
              </div>
            </li>
          </ul>
          <ul className="s-b right-nav" >
            <li>
              <div className='fl-col'>
                      <BiBell 
                      fontSize="2rem"
                      style={{color: "black"}}
                      />
                <span>Mes recherches</span>
              </div>
            </li>
            <li>
              <div className='fl-col'>
                <BiHeart 
                 fontSize="2rem"
                      style={{color: "black"}}
                />
                <span>Favoris</span>
              </div>
            </li>
            <li>
        
              <div className='fl-col'>
                <BiMessageDetail 
                  fontSize="2rem"
                      style={{color: "black"}}
                />
                <span>Messages</span>
              </div>
            </li>
            <li>
            
              <div className='fl-col'>
                <BiUser 
                 fontSize="2rem"
                      style={{color: "black"}}
                />
                <span>Se connecter</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  height: 4rem;
  background: var(--clr-white-1);
  box-shadow: var(--light-shadow);

  .nav-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 0.5rem 0 1.5rem 0;
    button {
             outline: none;
    }
    img {
      width: 150px;
    }
  }
  .nav-header975 {
    display: none;
  }
  @media (min-width: 975px) {
    .nav-header {
      display: none;
    }
    .nav-header975 {
      display: flex;
      align-items: center;
      justify-content: space-between;
       padding: 0.5rem 0 1.5rem 0;
      img {
      width: 150px;
    }
           button {
            background: var(--clr-orange);
            display: flex; 
            justify-content: center; 
            align-items: center; 
            color: var(--clr-white-1);
    }
    .logo-nav {
li {
        margin-right: 1rem; 
}

}
  
.right-nav {
        li {

                 margin-left: 1rem; 
        }
        span {
                font-size: 0.8rem;
        }
    }
   
    }
  }
`
