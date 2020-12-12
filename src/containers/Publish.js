import React, {useState} from 'react'
import Axios from "axios";
import "../main.css"
import styled from "styled-components"

const Publish = () => {

        const [title, setTitle] = useState("")
        const [description, setDescription] = useState("")
        const [price, setPrice] = useState(0)
        const [category, setCategory] = useState("")
        const [location, setLocation] = useState("")
        const [file, setFile] = useState("")

        const handleSubmit = (e) => {
                e.preventDefault()
        }

        return (
                <Wrapper>
                        <div className="section d-flex">
                                 <article className="contact-form fl-col-left">
                                         <h2>Déposer une annonce</h2>
          <form
          className="fl-col-left"
          onSubmit={
          handleSubmit    
          }
          >
            <div className="form-group full-width fl-col-left">
                               <label htmlFor="">Titre de l'annonce</label>
              <input
                className="form-control"
                type="text"
                name="title"
                id="title"
                value={title}
                required
                onChange={(event) => {
                        setTitle(event.target.value);
                }}
              />
                    <label htmlFor="">Texte de l'annonce</label>
              <textarea
                name="message"
                id=""
                rows="5"
                placeholder="Décrivez votre annonce"
                className="form-control"
                value={description}
                onChange={(event) => {
                        setDescription(event.target.value)
                }}
              />
              <label htmlFor="">Prix</label>
              <input
                className="form-control"
                type="number"
                name="price"
id="price"
value={price}
                required
                onChange={(event) => {
                        setPrice(event.target.value)
                }}
               
              />
               <label htmlFor="">Catégorie</label>
               <select
                      className="form-control"
                //       value={}
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            >
              {/* {options} */}
            </select>
             <label htmlFor="">Localisation</label>
              <input
                className="form-control"
                type="text"
                name="location"
id="location"
value={location}
                required
                onChange={(event) => {
                        setLocation(event.target.value)
                }}
              />
                <label htmlFor="">Ajouter une photo</label>
                 <input
              className="form-control"
              type="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            />
           
            </div>
             <button type="submit" className="btn"
            >
              Envoyer
            </button>
           
            
          </form>
        </article>
                        </div>
                </Wrapper>
        )
}

export default Publish

const Wrapper = styled.main`
min-height: calc(100vh - 4rem);
padding: 2rem 2rem 2.5rem 2rem;
display: grid; 
place-items: center;

.contact-form {
width: 100%;
        height: auto; 
        background: var(--clr-white-1);
        padding: 2rem;
  max-width: 50rem;
}
form {
        width:100%;
        max-width: 35rem;
        padding: 1rem;
        button {
                width: 50%;
                height: 2.6rem;
                color: var(--clr-white-1);
                background: var(--clr-blue);
        }
}
.form-group {
 width: 100%;
 /* padding: 1rem; */
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
