import React, {useContext} from 'react'
import "../main.css"
import styled from "styled-components"
import {ToggleContext} from "../context/toggleContext"

const OffersSmall = () => {
         const {toggleSearch} = useContext(ToggleContext)
        return (
                <Wrapper>
                        <div className="button-container section">
                               <button className="btn" >
                                       Toute la France
                               </button>
                               <button  className="btn"
                               onClick={
                                       toggleSearch
                               }
                               >Filtres</button>
                               <button className="btn" >Tri: Plus récentes</button>
                        </div>
                        <div className="check-box-container"></div>
                        <div className="offers-container"></div>
                </Wrapper>
        )
}

export default OffersSmall

const Wrapper = styled.section`
display: grid;
min-height: 100vh;
z-index: 0; 
grid-template-rows: 3rem 4rem auto; 
grid-row-gap: 1rem;
/* background: black; */
.button-container {
grid-row: 1/2;

        button {
        font-size: 0.85rem;
        border: 1px solid var(--clr-grey-2);
        border-radius: 25px;
        outline: none; 
        margin-left: 0; 
        margin: 0.5rem; 
}
}

`