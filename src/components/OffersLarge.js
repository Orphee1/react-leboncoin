import React from 'react'
import "../main.css"
import styled from "styled-components"
import {SearchBox} from "./index"


const OffersLarge = ({offers}) => {
        // console.log(offers);
        return (
                <Wrapper>
                        <div
                        className="top"
                        >
  <div className="ellipse" >

  </div>
  <section className="section fl-col"  >
<SearchBox />
  </section>
   
                        </div>
                        <section className="center section blue"></section>
                      
                       
                </Wrapper>
        )
}


export default OffersLarge

const Wrapper = styled.section`
display: grid;
grid-row: 20rem 1fr; 
grid-row-gap: 1rem; 
.top {
        position: relative;
grid-row: 1/2; 
width: 100%; 
section {
        padding-top: 3rem; 
}

}
.ellipse {
         height: 100px;
      width: 100%;
      position: absolute;
      border-radius: 100% 100% 100% 100% / 0% 0% 100% 100%;
      -webkit-border-radius: 50% 50% 50% 50% / 0% 0% 70% 70%;
      -moz-border-radius: 50% 50% 50% 50% / 0% 0% 70% 70%;
      background-color: var(--clr-orange);
      z-index: 10; 
}
.center {
grid-row : 2/3; 
width: 100%;
height: 100%;  
}
`
