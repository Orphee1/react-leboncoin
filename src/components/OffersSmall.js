import React, {useContext} from 'react'
import "../main.css"
import styled from "styled-components"

const OffersSmall = () => {
        return (
                <Wrapper>
                        <div className="button-container">
                               <button>
                                       Toute la France
                               </button>
                               <button
                        //        onClick={
                        //                toggletoggleSearch
                        //        }
                               >Filtres</button>
                               <button>Tri: Plus récentes</button>
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
background: black;
`