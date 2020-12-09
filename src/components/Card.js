import React from 'react'
import "../main.css"
import styled from "styled-components"

const Card = ({created, decription, location, pictures, price, title, }) => {
    return (
        <Wrapper>
            <div className="img-container">
                <img src={pictures} alt={title}/>
            </div>
            <div className="info-container">

            </div>
        </Wrapper>
    )
}


export default Card

const Wrapper = styled.article`
height: 11rem; 
width: 100%;
background: var(--clr-white-1);
box-shadow: var(--light-shadow);
display: grid; 
grid-template-columns: 12rem 1fr; 
grid-column-gap: 0.3rem; 
background: var(--clr-white-1); 
border-radius: var(--radius); 
margin: 0.3rem 0; 
.img-container {
grid-column: 1/2; 
height: max-content; 
img {
    width: 100%; 
    height: fill; 
}
}
.info-container {
    grid-column: 2/3; 
}
 @media (min-width: 975px) { 

 }

`
