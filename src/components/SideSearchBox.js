import React from 'react'
import {ToggleBar} from "./index"
import "../main.css"
import styled from "styled-components"
import {FaChevronRight} from "react-icons/fa"
import {GiMagnifyingGlass } from "react-icons/gi"
import {BsListCheck} from "react-icons/bs"
import {AiFillPlusCircle} from "react-icons/ai"

const SideSearchBox = () => {
        return (
                <Wrapper>
                        <div className="first fl-col" >
                                <div  className="first-a d-flex"
                                >
                                        <input type="text"
                                         placeholder="Que recherchez vous?"
                                        >
                                             
                                        </input>
                                           <GiMagnifyingGlass 
                                                fontSize="1.5rem"
                                                style={{color: "#939ea9"}}
                                                />
                                </div>
                                <div className="first-b d-flex" >
                                <div className="s-b" 
                                 style={{width: "90%"}}
                                >
<div className="s-b"
>
        <BsListCheck 
  fontSize="1.5rem"
  style={{marginRight: "1rem"}}      
        />
        <p>Toutes catégories</p>
</div>
<FaChevronRight 
  fontSize="1.5rem"
        style={{color : "#939ea9"}}
/>
                                </div>
                                </div>
                        </div>
                        <div className="fl-col second" >
                                <div className="sub-cont s-b">
                                        <p
                                          style={{fontWeight: "bold"}}
                                        >Prix</p>
                                        <p
                                        style={{color: "#4183D7", fontWeight: "bold"}}
                                        >Effacer</p>
                                        
                                </div>
                                 <div className="sub-cont left">
                                        <div style={{marginRight: "2rem"}} >
<div className="s-b">
 <p>min.</p>

                                        <p
                                        style={{color: "#FF6E13", marginLeft: "0.2rem"}}
                                        >0 €</p>
                                        </div>
                                        </div>
                                          <div>
                                                  <div className="s-b">
 <p>max.</p>
                                        <p
                                          style={{color: "#FF6E13", marginLeft: "0.2rem"}}
                                        >15 000+ €</p>
                                                  </div>

                                        </div>
                                       
                                </div>
                                <div className="sub-cont">
                                        <ToggleBar />
                                     
                                </div>
                                <div className="sub-cont s-b">
                                        <p
                                        style={{fontSize: "0.8rem", color: "#939ea9"}}
                                        >0€</p>
                                        <p
                                         style={{fontSize: "0.8rem", color: "#939ea9"}}
                                        >15 000 + €</p>
                                </div>
                        </div><div className="third fl-col" >
                                <div className="sub-cont s-b">
<p
style={{fontWeight: "bold"}}
>Où</p>
<p
 style={{color: "#4183D7", fontWeight: "bold"}}
>Effacer</p>
                                </div>
                                <div className="sub-cont">
                                        <button className="btn" >
                                                <AiFillPlusCircle 
                                                fontSize="1rem"
                                                style={{color: "#FF6E13", marginRight: "0.3rem"}}
                                                />
                                                Ajouter une localisation
                                        </button>
                                </div>
                                
                        </div><div className="fl-col-left fourth" >
                                <div className="sub-cont">
                                        <p>Voir également les annonces disponibles en livraison</p>
                                </div>
                        </div><div className="fl-col-left fifth" >
                                <div className="sub-cont left">
                                        <p
                                        style={{fontWeight: "bold"}}
                                        >Type d'annonces</p>
                                </div>
                                <div className="sub-cont left">
                                        <div className="s-b">
                                                <div className="s-b"
                                                style={{marginRight:"2rem"}}
                                                >
                                                        <input type="checkbox" id="" name="" value=""/>
                                                        <p>Offres</p>
                                                </div>
                                                <div className="s-b">
                                                         <input type="checkbox" id="" name="" value=""/>
                                                        <p>Demandes</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                       <footer>
                               <button className="btn">Rechercher résultats</button>
                       </footer>
                </Wrapper>
        )
}

export default SideSearchBox

const Wrapper = styled.section`
display: grid;
min-height: 100vh;
z-index: 0; 
grid-template-rows: 7rem 8.5rem 6rem 6rem 5rem; 
grid-row-gap: 1.3rem;
background: var(--clr-white-2);
.first {
        margin-top: 0.5rem;
grid-row: 1/2; 
width: 100%;
box-shadow: var(--light-shadow);

.first-a {
        width: 100%;
        background: var(--clr-white-2);
        padding: 0.5rem 0;
         position: relative;
  
       input {
            
               width: 90%; 
               background: var(--clr-white-2);
               padding: 0.75rem 1rem;
               border: 1px solid var(--clr-grey-2);
               border-radius: var(--radius);
       }
       input::placeholder { 
               color: var(--clr-grey-2);
       }
       svg {
               position: absolute; 
               top: 1.2rem; 
               right: 2.5rem; 
       }

}
.first-b {
        width: 100%;
        background: var(--clr-white-1);
          padding: 0.5rem 0;
      

}
}
.second {
grid-row: 2/3; 
 background: var(--clr-white-1);
 box-shadow: var(--light-shadow);

}
.third {
grid-row: 3/4;
 box-shadow: var(--light-shadow);
button {
        color: var(--clr-orange); 
        border: 1px solid var(--clr-orange);
border-radius: 5rem; 
        padding: 0.4rem 1rem; 
        display: flex; 
} 

}
.fourth {
grid-row: 4/5; 
background: var(--clr-white-1);
box-shadow: var(--light-shadow);


}
.fifth {
grid-row: 5/6; 
box-shadow: var(--light-shadow);
input {
        margin-right: 1rem;
}

}
.sub-cont {
        width: 90%;
        margin: 0.5rem auto;
}
footer {
        position: fixed; 
        bottom: 0; 
        z-index: 10; 
        height: 6rem;
        width: 100%; 
        background: var(--clr-white-1); 
        box-shadow: var(--dark-shadow);
        display: flex; 
        justify-content: center; 
        align-items: center; 
        button {
                background: var(--clr-blue);
                color: var(--clr-white-1);
                width: 90%;
                font-size: 1rem; 
                padding: 0.6rem 0; 
        }
}

`