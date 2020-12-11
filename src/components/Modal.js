import React from 'react'
import {Link} from "react-router-dom"
import "../main.css"; 
import styled from "styled-components"

const Modal = ({setModal}) => {
  return (
    <Wrapper>
      <section className="modal-content section"  >
<Link
to="/user/sign_in"
onClick={()=> {
  setModal(false)
}}
>Se connecter</Link>
<Link
to="/user/sign_up/"
onClick={()=> {
  setModal(false)
}}
>Créer un compte</Link>
      </section>
    </Wrapper>
  )
}


export default Modal

const Wrapper = styled.main`
  position: fixed;
   z-index: 200;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--clr-white-1);
      .modal-content {
      width: 100%;
      }
  @media (min-width: 1064px) {

  }

`
