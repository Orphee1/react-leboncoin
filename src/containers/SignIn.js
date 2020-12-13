import React, {useState} from 'react'
import Axios from "axios";
import Cookie from "js-cookie";
import {Link, useHistory} from "react-router-dom"
import "../main.css"
import styled from "styled-components"


const SignIn = ({setUser}) => {
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [isLoading, setIsLoading] = useState(false)
        const history = useHistory();

const handleSubmit = async (e) => {
        e.preventDefault()
setIsLoading(true)

try {
// const response = await Axios.post("http://localhost:5000/api/user/log_in", 
const response = await Axios.post("https://leboncoinhl.herokuapp.com/api/user/log_in", 
{
        email: email, 
        password: password
}
)

if (response.data) {
// console.log(response.data);
const {token} = response.data 
Cookie.set("token", token);
setUser(response.data);
setIsLoading(false);
history.push("/");
}
} catch (error) {
console.log(error)
alert("Error login")
setIsLoading(false);
}

}

        return (
                <Wrapper>
                        <section
                        className="section sign-in-section fl-col"
                        >
                                 {isLoading && 
          <div className="loader lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
}

   <article className="contact-form fl-col">
           <header className="fl-col-left" >
  <h2>Bonjour !</h2>
          <p>Connectez-vous pour découvrir toutes nos fonctionnalités</p>
           </header>
        
          <form 
          className="full-width fl-col"
          style={{marginBottom: "2rem"}} 
          onSubmit={
          handleSubmit    
          }
          >
            <div className="form-group full-width fl-col-left">
                    <label htmlFor="email">E-mail</label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                value={email}
                required
                onChange={(event) => {
                        setEmail(event.target.value);
                }}
              />
              <label htmlFor="pass">Mot de passe</label>
              <input
                className="form-control"
                type="password"
                name="password"
id="pass"
value={password}
                required
                onChange={(event) => {
                        setPassword(event.target.value)
                }}
              />
            
            </div>
            <button type="submit" className="btn"
            >
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
position: relative;
min-height: calc(100vh - 4rem);
padding: 1rem;
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center;  
.loader {
        position: absolute;
        top: 2rem;
}
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
        .loader {
        position: absolute;
        left: 48vw; 
}
.contact-form { 
 box-shadow: var(--light-shadow);

}

}
      

 
`