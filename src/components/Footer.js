import React from 'react'
import "../main.css"
import styled from "styled-components"
import {GrFacebook} from "react-icons/gr"
import {FaTwitterSquare} from "react-icons/fa"

const Footer = () => {
        return (
                <Wrapper>
                        <div className="section bottom">
<span

>leboncoin 2006 - {new Date().getFullYear()}</span>
<div className="s-b">
        <GrFacebook 
        fontSize="1.5rem"
        style={{color: "white", marginLeft: "0.5rem"}}
        />
        <FaTwitterSquare 
          fontSize="1.5rem"
        style={{color: "white", marginLeft: "0.5rem"}}
        />
</div>
                        </div>
                </Wrapper>
        )
}

export default Footer

const Wrapper = styled.footer`
display: grid; 
place-items: center; 
height: 3rem;
padding: 0.5rem 0 1rem 0;  
background:  hsl(0, 0%, 28%);
color: var(--clr-white-1);
.bottom {
display: flex; 
align-items: center; 
justify-content: space-between;
}
@media (min-width: 975px) {
display: grid; 
place-items: center; 
height: 20rem; 
.bottom {
        /* padding : 1rem 0;  */
}
}
`
