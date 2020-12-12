import React from 'react'
import "../main.css"
import styled from "styled-components"
import options from "../constants/selectOptions"
import {BsListCheck} from "react-icons/bs"
import { GiMagnifyingGlass} from "react-icons/gi"
import {optionMin, optionMax} from "../constants/priceOptions"



const Searchbox = ({setCategory, setPriceMax, setPriceMin, setTitle, title}) => {
        return (
                <Wrapper>
                        <div className="container fl-col-left">
                                <div className="top d-flex">
                                        <div className="selecter d-flex">

                                       
                                        < BsListCheck
                                        fontSize="2rem"
                                        style={{color: "#939ea9", marginRight: "0.5rem"}}
                                        />
                                        <select name="category" id="category"
                                        onChange={(event) => {
                                                setCategory(event.target.value);
                                        }}
                                        >
                                                {options}
                                        </select>
                                        
                                        </div>  
                                        <div className="input-container d-flex">
                                                <GiMagnifyingGlass 
                                                 fontSize="2rem"
                                        style={{color: "#939ea9", marginRight: "0.5rem"}}
                                                />
                                        <input type="text"
                                        placeholder="Que recherchez-vous?"
                                        value={title}
                                        onChange={(event) => {
                                                setTitle(event.target.value);
                                        }}

                                        />
                                        </div>
                                </div>
                                <div className="bottom s-b">
                                        <div className="d-flex">
                                                <p>Prix minimum:</p>
                                                <select 
                                                className="price-min"
                                                name="priceMin" id="priceMin"
                                                onChange={(event) => {
                                                        setPriceMin(event.target.value)
                                                }}
                                                >
                                                        {optionMin}
                                                </select>
                                                <span>€</span>
                                        </div>
                                        <div className="d-flex">
                                                 <p>Prix maximum:</p>
                                                <select 
                                                className="price-min"
                                                name="priceMax" id="priceMax"
                                                onChange={(event) => {
                                                        setPriceMax(event.target.value);
                                                }}
                                                >
                                                        {optionMax}
                                                </select>
                                                <span>€</span>
                                        </div>
                                </div>
                        </div>
                </Wrapper>
        )
}

export default Searchbox

const Wrapper = styled.div`
width: 900px; 
height: 10rem; 
background: var(--clr-white-2); 
border-radius: var(--radius); 
box-shadow: var(--light-shadow);
margin: auto; 
padding: 0.5rem 0.5rem 1rem 0.5rem; 
z-index: 50; 
display: grid; 
place-items: center; 
.container {
        width: 90%; 
        height: auto; 
}
.top {
        width: 100%;
        height: 3rem;
        margin: 1rem auto;
         border-radius: var(--radius);
        background: var(--clr-grey-4);

}
.selecter {
flex: 2;
height: 100%;
 padding-left: 1rem;
        padding-right: 1rem;
         border-radius: 0.25rem 0 0 0.25rem;
border-right: 1px solid var(--clr-grey-2);
select{
                width: 100%;
                height: 100%;
      background-color: hsl(200, 16%, 96%);
font-size: 1rem;
      color: var(--clr-grey-2);
      border: none;
        }
}
.input-container {
        flex: 3;
        height: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
        border-radius: 0 0.25rem 0.25rem 0;
        input {
                width: 100%;
                height: 100%;
                color: var(--clr-grey-2);
font-size: 1rem;
                border: none;
                background: hsl(200, 16%, 96%);
                margin-left: 0.5rem; 
        } 
        input::placeholder {
color: var(--clr-grey-2);
font-size: 1rem;
margin-left: 0.5rem;

        }
}
.bottom{
        width: 70%;
       p {
               font-size: 0.8rem;
               margin-right: 0.5rem;
       }
       select {
               margin-right: 0.5rem;
               width: 80px;
               background-color: hsl(200, 16%, 96%);
font-size: 1rem;
      color: var(--clr-grey-2);
      border: none;
       }
}
`