import React from 'react'
import "../main.css"
import styled from "styled-components"
import { BiBell,  BiHeart, BiMessageDetail, BsPlusSquare, FaChevronRight, GiMagnifyingGlass, ImCross } from 'react-icons/all'
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
                                <div className="top section">
<div className="s-b-left">
        <BsPlusSquare 
        fontSize="1.5rem"
        style={{color : "black", marginRight: "1rem"}}
        /> <span>Déposer une annonce</span>
</div>
<div className="s-b-left ">
        <GiMagnifyingGlass 
        fontSize="1.5rem"
        style={{color : "black", marginRight: "1rem"}}
        />
        <span>Rechercher</span>
</div>
<div className="b-bottom"></div>
<div className="s-b-left">
        <BiMessageDetail 
         fontSize="1.5rem"
        style={{color : "black", marginRight: "1rem"}}
        />
         <span>Messages</span>
</div>
<div className="s-b-left">
        <BiHeart 
         fontSize="1.5rem"
        style={{color : "black", marginRight: "1rem"}}
        />
         <span>Favoris</span>
</div>
<div className="s-b-left">
        <BiBell 
        fontSize="1.5rem"
        style={{color : "black", marginRight: "1rem"}}
        />
        <span>Recherches sauvegardées</span>
</div>
                                </div>
                                <div className="bottom section">
<div className="s-b-left">
        <span
        style={{color: "#FF6E13"}}
        >Se connecter</span>
</div>
<div className="b-bottom"></div>
<div className="s-b">

        <span>Informations pratiques</span>
        <FaChevronRight
         fontSize="1.5rem"
        style={{color : "#939ea9", marginRight: "6rem"}}
        />
</div>
<div className="s-b">
        <span>leboncoin Groupe</span>
         <FaChevronRight 
         fontSize="1.5rem"
        style={{color : "#939ea9", marginRight: "6rem"}}
        />
</div>

                                </div>

                                        
                                

                        </section>
                </Wrapper>
        )
}

export default SideBar

const Wrapper = styled.aside`
 .show-sidebar {
         opacity: 1;
         transform: translateX(0)
} 
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
  display: grid;
  grid-template-rows: 4rem 50vh 1fr; 
  row-gap: 0.5rem;

  }
header {
        grid-row: 1/2;
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
.top {
        grid-row: 2/3;
        div {
                margin : 0.5rem auto;
                padding: 0.5rem 0; 
        }
        span {
font-size: 1rem;

        }
        
}
.b-bottom {
        border-bottom: 1px solid var(--clr-grey-2);
        
}
.bottom {
        grid-row: 3/4;
          div {
                margin : 0.5rem auto; 
                 padding: 0.5rem 0; 
        }
        span {
font-size: 1rem;
        }
}



  

`
