import React from 'react'
import "../main.css"
import styled from "styled-components"
import {FaChevronRight, FaRegClock} from "react-icons/fa"; 
import {BiHeart} from "react-icons/bi"
import user from "../icons/user.png"


const BigCard = ({offer, productNumber}) => {
  // console.log(offer);
  console.log(productNumber);
  const {
    // category, 
    created, creator, description, 
    // location, 
    pictures, price, title} = offer; 
  return (
    <Wrapper>
      <section className="main fl-col">
        <div className="img-container">
<img src={pictures} alt={title}/>
<div className="heart d-flex">
  <BiHeart 
  fontSize="1.5rem"
  />
</div>
        </div>
        <div className="title fl-col-left">
          <div className="s-b"
          style={{width: "100%"}}
          >

                <h3>{title}</h3>
              <div className="heart975 d-flex">
  <BiHeart 
  fontSize="1.5rem"
  />
</div>
          </div>
  <h4
  style={{color: "#FF6E13"}}
  >{price} €</h4>
  <p>{created}</p>
        </div>
      </section>
      <div className="description975">
  <h4>Description</h4>
  <p>{description}</p>
      </div>
      <aside className="seller975 fl-col">
      <div className=" first s-b">
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
        <div className="left full-width"
        style={{marginTop: "1rem"}}
        >
          <FaRegClock 
          fontSize="1.2rem"
          style={{color: "#939ea9", marginRight: "0.5rem"}}
          />
<p
style={{fontSize: "0.8rem"}}
>Répond généralement en une journée</p>
        </div>
        <button className="btn">Faire une offre</button>
        <button className="btn">Envoyer un message</button>
      </aside>
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
    <footer className="footer full-width d-flex blue" >
      <button className="btn">Contacter</button>
      <button className="btn">Faire une offre</button>
    </footer>
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
}
 
}
.description975 {
  display: none; 
}
.seller975 {
  display: none; 

}
.img-container {
 width: 100%;
  position: relative; 
 img {
  
   width: 100%; 
 height: 19rem;
  object-fit: cover;
  display: block;
 }
 }
.heart{
  position: absolute; 
  top: 15px; 
  right: 20px; 
  background: var(--clr-white-1); 
  width: 40px; 
  height: 40px; 
  border-radius: 50%; 
}
.heart975 {
  opacity: 0; 
  
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
.footer {
  position: fixed; 
  bottom: 0; 
  z-index:  10; 
height: 4.5rem;
padding: 0.5rem 0 1rem 0;
background: var(--clr-white-1);
box-shadow: var(--dark-shadow);
button {
 color: var(--clr-blue); 
 width: 45%;
 height: 40px;
 margin: 0 0.5rem; 
 border: 1px solid var(--clr-blue);
 border-radius: var(--radius);
   background: var(--clr-white-1);
}
button:nth-child(2) {
  height: 41px;
  color: white; 
   background: var(--clr-orange);
   border: transparent; 

  } 
}
@media screen and (min-width: 1064px) {
display: grid; 
width: 100%; 
height: 100%;
grid-template-rows: 65vh 1fr;    
grid-template-columns: 50vw 30vw;
grid-column-gap: 1.5rem; 
grid-row-gap: 0.5rem; 

.main {
  grid-row: 1/2; 
  grid-column: 1/2;
  width: 100%; 
  align-self: flex-start;
  img {
    height: 20rem;
    border-radius: 0.25rem 0.25rem 0 0;
  }
h4 {
  margin-bottom: 0.75rem;
}

}
.heart {
  display:none; 
}
.heart975 {
opacity: 1;
  background: var(--clr-white-1); 
  width: 40px; 
  height: 40px; 
  border-radius: 50%; 
box-shadow: var(--dark-shadow);  
}
 .title {
   width: 100%; 
   padding-bottom: 1rem; 
border-bottom: 1px solid var(--clr-grey-3); 

 }
 .description975 {
   grid-row: 2/3; 
   grid-column: 1/2; 
  display: flex; 
  flex-direction: column; 
  align-items: flex-start; 
   padding-bottom: 1rem; 
border-bottom: 1px solid var(--clr-grey-3); 
  h4 {
  margin-bottom: 0.75rem;
}
}
.seller975 {
   grid-row: 1/2; 
   grid-column: 2/3;
   align-self: flex-start;
   justify-self: flex-start;
   width: 90%; 
   height: 19rem;
display: flex; 
padding: 1rem; 
   border-radius: var(--radius);
   box-shadow: var(--dark-shadow); 

    img {
    width: 50px; 
    margin-right: 1rem; 
  }
  button {
    width: 100%; 
height: 2.6rem;
color: white; 
    border-radius: var(--radius);
margin: 1rem auto; 
 background: var(--clr-orange);
  }
  button:nth-child(3) {
   background: var(--clr-blue);

  } 

}
.first {
  width: 100%; 
     padding: 1rem 0; 
  border-bottom: 1px solid var(--clr-grey-2);
}
 .second-container {
  display: none; 
}
 .footer {
 display: none;  
}
}

`
