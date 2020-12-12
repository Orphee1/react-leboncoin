import React, {useState} from 'react'
import Axios from "axios";
import Cookies from "js-cookie"; 
import {useHistory} from "react-router-dom";
import "../main.css"
import styled from "styled-components"
import image from "../icons/signup-illustration.jpg"

const SignUp = ({setUser}) => {
        const [userName, setUserName] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [confirmPassword, setConfirmPassword] = useState("")
        const [errorMessage, setErrorMessage] = useState(false)
      const [isLoading, setIsLoading] = useState(false)
      const history = useHistory();

        let isOk = false;
        let regex = /@/;
if (password !== "" && email !== "" && email.match(regex) && userName !== "" && password === confirmPassword) {
isOk = true;
}

        const handleSubmit = async (e) => {
                e.preventDefault()
                setIsLoading(true);
                if (isOk) {
                        try {
const response = await Axios.post("http://localhost:5000/api/user/sign_up", {
// const response = await Axios.post("https://leboncoinhl.herokuapp.com/api/user/sign_up", {
        username: userName,
        email: email,
        password: password
})
// console.log(response);
if (response.data.token) {
const {token} = response.data;
Cookies.set("token", token);
setUser(response.data);
 setIsLoading(false);
history.push("/");
}

                        } catch(error) {
                                console.log(error.message);
                                alert("An error occured");
                                setIsLoading(false);
                        }

                } 
        }
        return (
                <Wrapper>
                        <section className="section d-flex"  >
                                {isLoading && 
          <div className="loader lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
}

  <article className="contact-form fl-col">
          <form 
          className="full-width fl-col-left"
       
          onSubmit={
          handleSubmit    
          }
          >
            <div className="form-group full-width fl-col-left">
                               <label htmlFor="user">Nom d'utilisateur</label>
              <input
                className="form-control"
                type="text"
                name="username"
                id="user"
                placeholder="ex: Camille"
                value={userName}
                required
                onChange={(event) => {
                        setUserName(event.target.value);
                }}
              />
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
                onFocus={(event) => {
                        setErrorMessage(false)
                }}
              />
               <label htmlFor="confPass">Confirmez votre mot de passe</label>
              <input
                className="form-control"
                type="password"
                name="password"
id="confPass"
value={confirmPassword}
                required
                onChange={(event) => {
                        setConfirmPassword(event.target.value)
                }}
                  onFocus={(event) => {
                        setErrorMessage(false)
                }}
                onBlur={(event) => {
                     
                        if (password !== confirmPassword) {
                                setErrorMessage(true);
                        }
                }}
              />
              {errorMessage &&    <p
              className="alert"
              >Les mots de passe saisis ne sont pas identiques</p>
                     
              }
 
            </div>
           
            <button type="submit" className={isOk ? `btn buttonOk` : `btn button`}
            >
              Créer mon compte
            </button>
          </form>
                
       
        </article>
        <div className="img-container">
<img src={image} alt="logo"/>
        </div>
 

                        </section>
                </Wrapper>
        )
}

export default SignUp

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
.contact-form{
          width: 90%;
        height: 80vh; 
        background: var(--clr-white-1);
        padding: 2rem;
  max-width: 30rem;
}
.form-group {
        position: relative;
         width: 100%;
        margin: 0 auto 1rem auto;
        padding-bottom: 1rem;
        label {
                font-weight: bold;
                margin-bottom: 0.5rem; 
        }
        p {
           position: absolute;
           bottom: 0.5rem;
                color: red; 
                font-size: 0.8rem;
        }

}
.form-control {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--clr-grey-3);
  margin-bottom: 1.25rem;
  
}
.button {
width: 50%;
 height: 2.6rem;
 color: var(--clr-grey-2);
 background: var(--clr-grey-4);
}
.buttonOk {
width: 50%;
 height: 2.6rem;
 color: var(--clr-white-1);
 background: var(--clr-blue);
}
.img-container {
        display: none;
}
@media screen and (min-width: 1064px) { 
.loader {
        position: absolute;
        left: 30vw; 
}
        .contact-form{
                margin-right: 0.5rem;
        }
.img-container {
        display: block;
        height: 30rem; 
        width: 30rem; 
        margin-left: 0.5rem; 
        padding: 1rem; 
        img {
                width: 100%;
                height: 25rem; 
                object-fit: contain; 
        }
}

}

` 