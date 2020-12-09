import React from 'react'
import "../main.css"
import styled from "styled-components"
import {BiHeart} from "react-icons/bi"

const Card = ({category, created, location, pictures, price, title, }) => {
    return (
        <Wrapper>
            <div className="img-container">
                <img src={pictures} alt={title}/>
            </div>
            <div className="info-container">
                <BiHeart 
                fontSize="1.3rem"
                />
                <div className="fl-col-left">

               
    <h4>{title.substring(0, 40)}</h4>
    <span
    style={{color: "#FF6E13"}}
    >{price} €</span>
     </div>
<div className="fl-col-left">
    <p>{category.title} </p>
    <p>{location}</p>
    <p>{created}</p>
</div>
            </div>
        </Wrapper>
    )
}


export default Card

const Wrapper = styled.button`
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
cursor: pointer; 
border: none; 
outline: none;
.img-container {
grid-column: 1/2; 

img {
    width: 100%;
  height: 11rem;
  object-fit: cover;
}
}
.info-container {
    grid-column: 2/3;
    height: 100%; 
    position: relative; 
    display: flex; 
    flex-direction: column; 
    align-items: flex-start; 
    justify-content: space-between; 
    padding: 1rem 1rem 1.5rem 1rem; 
h4, span {
    margin-bottom: 0.3rem
}
p {
    margin-bottom: 0.2rem
}
svg {
    position: absolute; 
    top: 0.5rem;
    right: 1.5rem;
}
}
 @media (min-width: 975px) { 

 }

`
