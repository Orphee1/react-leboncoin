import React, {useContext} from 'react'
import Cookie from "js-cookie";
import '../main.css'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { BiBell, BiHeart, BiMessageDetail, BiUser, BsPlusSquare, GiMagnifyingGlass, GoThreeBars, ImCross } from 'react-icons/all'

import logo from '../icons/logo.png'
import {ToggleContext} from "../context/toggleContext"

const Header = ({user, setUser, setModal}) => {
  const token = Cookie.get("token")
        const {toggleSearch, searchBoxOpen, toggleSide } = useContext(ToggleContext)
        const history = useHistory();

        const disconnect = () => {
           setUser({});
           Cookie.remove("token")                                 
        }

  return (
    <Wrapper>
      <div className='section'>
        <div className='nav-header'>
          <button className='btn'
        onClick={toggleSide}
          >
            <GoThreeBars fontSize='2rem' style={{ color: '#FF6E13' }} />
          </button>
          <Link 
          to="/"
          >
         
          <img src={logo} alt='logo Leboncoin' />
           </Link>
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
              <Link to="/" >
              <img src={logo} alt='logo Leboncoin' />
              </Link>
            </li>
            <li>
              <button className='btn'
              onClick={() => {
                if (token) {
history.push("/publish/")
                } else {
                  setModal(true);
                }
              }}
              >
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
            <li>{user.token ? (
<button className="btn fl-col" 
onClick={disconnect}
>
                <BiUser 
                 fontSize="2rem"
                      style={{color: "#1a1a1a"}}
                />
                <span>Se déconnecter</span>
</button>
            ): (
              <Link 
                to="/user/sign_in"
                style={{color: "black"}}
                >
              <div className='fl-col'>
                <BiUser 
                 fontSize="2rem"
                      style={{color: "#1a1a1a"}}
                />
                <span>Se connecter</span>
               
              </div>
               </Link>
                )}
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  position: sticky; 
  top: 0;
  height: 4rem;
  background: var(--clr-white-1);
  box-shadow: var(--light-shadow);
z-index: 100;
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
       /* margin-bottom: 1.25rem; */
    }
  }
  .nav-header975 {
    display: none;
  }
  @media (min-width: 1064px) {
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
