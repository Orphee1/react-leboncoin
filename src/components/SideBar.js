import React from 'react'
import "../main.css"
import styled from "styled-components"
import { BiBell, BiHeart, BiMessageDetail, BiUser, BsPlusSquare, GiMagnifyingGlass, GoThreeBars, ImCross } from 'react-icons/all'
import logo from "../icons/logo.png"

const SideBar = ({sideBarOpen, toggleSide}) => {
        return (
                <Wrapper  >
                        <section className={` ${sideBarOpen ? "show-sidebar": ""}`}    >
                                <header>
<img src={logo} alt="logo Leboncoin"/>
<button
className="btn"
onClick={toggleSide}
>
        <ImCross 
        fontSize='2rem' style={{ color: '#939ea9' }} 
        />
</button>
                                </header>
                        </section>
                </Wrapper>
        )
}

export default SideBar

const Wrapper = styled.aside`
  
  section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
background: var(--clr-white-2);
z-index: 100; 
 opacity: 0;
   transition: var(--transition);
  transform: translateX(-100%);
  display: flex;
  flex-direction: column; 

  }
header {
        height: 4rem;
        position: relative;
        display: flex; 
        justify-content: center; 
        align-items: center; 
        img {
                 width: 150px;
        }
        button {
                position: absolute; 
                top: 0.5rem; 
                right: 1rem;
        }
}


.show-sidebar {
         opacity: 1;
         transform: translateX(0)
}
  

`
