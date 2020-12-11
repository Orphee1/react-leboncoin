import React from 'react'
import Axios from "axios";
import {Link} from "react-router-dom"
import "../main.css"
import styled from "styled-components"


const SignIn = () => {
        return (
                <Wrapper>
                        <section
                        className="section sign-in-section fl-col"
                        >

   <article className="contact-form fl-col">
           <header className="fl-col-left" >
  <h2>Bonjour !</h2>
          <p>Connectez-vous pour découvrir toutes nos fonctionnalités</p>
           </header>
        
          <form action="" method="" className="full-width fl-col"
          style={{marginBottom: "2rem"}}
          >
            <div className="form-group full-width fl-col-left">
                    <label htmlFor="">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
              />
              <label htmlFor="pass">Mot de passe</label>
              <input
                type="password"
                name="password"
id="pass"
                className="form-control"
                required
              />
            
            </div>
            <button type="submit" className="btn">
              Se connecter
            </button>
          </form>
                 <p
        style={{fontWeight: "bold", marginBottom: "0.5rem"}}
        >Envie de nous rejoindre? </p> 
        <Link 
        to="/user/sign_up/"
         style={{color: "#4183D7"}}
        >
        <span
        >Créer un compte</span>
        </Link>
        </article>
 
                        </section>
                </Wrapper>
        )
}

export default SignIn

const Wrapper = styled.main`
min-height: calc(100vh - 4rem);
padding: 1rem;
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center;  
.contact-form {
        width: 90%;
        height: 80vh; 
        background: var(--clr-white-1);
        padding: 2rem;
  max-width: 30rem;
header {
        width: 100%;
        margin: 1rem auto; 
}
button {
        width: 100%; 
        background: var(--clr-blue);
        color: var(--clr-white-1);
        height: 2.6rem;
}
}
.form-group {
         width: 100%;
        margin: 1rem auto;
        label {
                font-weight: bold;
                margin-bottom: 0.5rem; 
        }
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--clr-grey-3);
  margin-bottom: 1.25rem;
  
}
@media screen and (min-width: 1064px) {
.contact-form { 
box-shadow: var(--dark-shadow);

}

}
      

 
`