import React, {useState} from 'react'
import "../main.css"
import styled from "styled-components"
import image from "../icons/signup-illustration.jpg"

const SignUp = () => {
        const [userName, setUserName] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [confirmPassword, setConfirmPassword] = useState("")
        const [errorMessage, setErrorMessage] = useState(false)

        let isOk = false;
if (password !== "" && email !== "" && userName !== "" && password === confirmPassword) {
isOk = true;
}

        const handleSubmit = (e) => {
                e.preventDefault()
                if (isOk) {

                } else {

                }
        }
        return (
                <Wrapper>
                        <section className="section d-flex"  >

  <article className="contact-form fl-col">
          <form 
          className="full-width fl-col-left"
       
          onSubmit={
          handleSubmit    
          }
          >
            <div className="form-group full-width fl-col-left">
                               <label htmlFor="">Nom d'utilisateur</label>
              <input
                className="form-control"
                type="text"
                name="username"
                id="username"
                value={userName}
                required
                onChange={(event) => {
                        setUserName(event.target.value);
                }}
              />
                    <label htmlFor="">E-mail</label>
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
               <label htmlFor="pass">Confirmez votre mot de passe</label>
              <input
                className="form-control"
                type="password"
                name="password"
id="pass"
value={confirmPassword}
                required
                onChange={(event) => {
                        setConfirmPassword(event.target.value)
                }}
              />
            
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
min-height: calc(100vh - 4rem);
padding: 1rem;
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center;  
.contact-form{
          width: 90%;
        height: 80vh; 
        background: var(--clr-white-1);
        padding: 2rem;
  max-width: 30rem;
}
.form-group {
         width: 100%;
        margin: 0 auto 1rem auto;
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