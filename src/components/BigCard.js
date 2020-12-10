import React from 'react'
import "../main.css"
import styled from "styled-components"
import {FaChevronRight} from "react-icons/fa"; 
import user from "../icons/user.png"


const BigCard = ({offer, productNumber}) => {
  // console.log(offer);
  console.log(productNumber);
  const {category, created, creator, description, location, pictures, price, title} = offer; 
  return (
    <Wrapper>
      <section className="main fl-col">
        <div className="img-container">
<img src={pictures} alt={title}/>
        </div>
        <div className="title fl-col-left">
  <h3>{title}</h3>
  <h4
  style={{color: "#FF6E13"}}
  >{price} €</h4>
  <p>{created}</p>
        </div>
      </section>
      <section className="second-container">
        <button className="btn">
          Faire une offre
        </button>
        <div className="seller s-b">
<div className="s-b">
  <img src={user} alt="icon-user"/>
  <div className="fl-col-left">
  <h4>{creator}</h4>

  {productNumber > 1 ? (
  <p>{productNumber} annonces</p>
  ): (
  <p>{productNumber} annonce</p>
  )}

  </div>
</div>
<FaChevronRight 
fontSize="1.3rem"
style={{color: "#939ea9"}}
/>
        </div>
        <div className="description fl-col-left">
<h4>Description</h4>
  <p>{description}</p>
        </div>

      </section>
    </Wrapper>
  )
}


export default BigCard

const Wrapper = styled.article`
display: grid;
grid-template-rows: 58vh 1fr;    
grid-row-gap: 0.5rem; 
width: 100%; 
height: 100%;
.main {
  grid-row: 1/2; 
  width: 100%; 
  align-self: flex-start;
  h4 {
    font-size: 1.25rem;
  /* margin-bottom: 0.75rem; */
}
 
}
.img-container {
 width: 100%;
 img {
   width: 100%; 
 height: 19rem;
  object-fit: cover;
  display: block;
 }
 }

 .title {
   width: 95%;
   padding: 1rem 0; 
}
.second-container {
  width: 100%; 
  grid-row: 2/3; 
  display: flex; 
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: center; 
  padding: 0.5rem 0;  
  button {
width: 95%;
background: var(--clr-orange); 
color: white; 
border-radius: var(--radius);
height: 2.5rem;
margin-bottom: 1.5rem; 
  }
}
.seller {
  width: 95%; 
  margin: 0 auto; 
  padding: 1rem 0 1.5rem 0; 
  border-top: 1px solid var(--clr-grey-2);
  border-bottom: 1px solid var(--clr-grey-2);
  img {
    width: 50px; 
    margin-right: 1rem; 
  }
}
.description {
  width: 95%;
  padding: 1rem 0;  
  h4 {
    margin-bottom: 1rem; 
  }
}

@media screen and (min-width: 975px) {
display: grid; 
width: 100%; 
height: 100%;
grid-template-rows: 60vh 30vh;    
grid-template-columns: 45vw 30vw;
grid-row-gap: 1rem; 

.main {
  grid-row: 1/2; 
  grid-column: 1/2;
  width: 100%; 
  align-self: flex-start;
  img {
    height: 22rem;
    border-radius: 0.25rem 0.25rem 0 0;
  }
h4 {
  margin-bottom: 0.75rem;
}

}
 .title {
   padding-bottom: 1rem; 
border-bottom: 1px solid var(--clr-grey-3); 

 }
 .second-container {
  display: none; 
}
 
}

`