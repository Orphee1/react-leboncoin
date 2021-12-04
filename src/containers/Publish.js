import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import Cookie from 'js-cookie'
import '../main.css'
import styled from 'styled-components'
import options from '../constants/selectOptions'

const Publish = () => {
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const [offer, setOffer] = useState({
    title: '',
    category: '',
    price: 0,
    description: '',
    location: '',
    file: null,
  })

  const token = Cookie.get('token')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData()
    formData.append('title', offer.title)
    formData.append('category', offer.category)
    formData.append('price', offer.price)
    formData.append('description', offer.description)
    formData.append('location', offer.location)
    formData.append('pictures', offer.file)

    try {
      const response = await Axios.post(
        'http://localhost:5000/api/v1/offer',
        // const response = await Axios.post(
        // "https://leboncoinhl.herokuapp.com/api/v1/offer",
        formData,
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      console.log(response)
      setIsLoading(false)
      history.push('/')
    } catch (error) {
      console.log(error)
      alert('An error occurred sending product')
      setIsLoading(false)
    }
  }

  return (
    <Wrapper>
      <div className='section d-flex'>
        {isLoading && (
          <div className='loader lds-facebook'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <article className='contact-form fl-col-left'>
          <h2>Déposer une annonce</h2>
          <form className='fl-col-left' onSubmit={handleSubmit}>
            <div className='form-group full-width fl-col-left'>
              <label htmlFor='title'>Titre de l'annonce</label>
              <input
                className='form-control'
                type='text'
                name='title'
                id='title'
                value={offer.title}
                required
                onChange={(event) => {
                  setOffer({ ...offer, title: event.target.value })
                }}
              />
              <label htmlFor='category'>Catégorie</label>
              <select
                className='form-control short'
                id='category'
                onChange={(event) => {
                  setOffer({ ...offer, category: event.target.value })
                }}
              >
                {options}
              </select>
              <label htmlFor='price'>Prix</label>
              <input
                className='form-control short'
                type='number'
                name='price'
                id='price'
                value={offer.price}
                required
                onChange={(event) => {
                  setOffer({ ...offer, price: event.target.value })
                }}
              />
              <label htmlFor='desc'>Texte de l'annonce</label>
              <textarea
                name='description'
                id='desc'
                rows='5'
                placeholder='Décrivez votre annonce'
                className='form-control'
                value={offer.description}
                onChange={(event) => {
                  setOffer({ ...offer, description: event.target.value })
                }}
              />

              <label htmlFor='location'>Localisation</label>
              <input
                className='form-control'
                type='text'
                name='location'
                id='location'
                value={offer.location}
                required
                onChange={(event) => {
                  setOffer({ ...offer, location: event.target.value })
                }}
              />
              <label htmlFor='pic' className='btn file-btn'>
                Ajouter une photo
              </label>
              <input
                className='file'
                name='picture'
                id='pic'
                type='file'
                onChange={(event) => {
                  setOffer({ ...offer, file: event.target.files[0] })
                }}
              />
            </div>
            <button type='submit' className='btn'>
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
  position: relative;
  min-height: calc(100vh - 4rem);
  padding: 2rem 2rem 2.5rem 2rem;
  display: grid;
  place-items: center;
  .loader {
    position: absolute;
    top: 2rem;
    right: 12vw;
  }
  .contact-form {
    width: 100%;
    height: auto;
    background: var(--clr-white-1);
    padding: 2rem;
    max-width: 50rem;
  }
  form {
    width: 100%;
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
  .short {
    width: 50%;
  }
  .file-btn {
    width: 50%;
    height: 2.6rem;
    color: var(--clr-white-1);
    background: var(--clr-blue);
    cursor: pointer;
    font-size: 1rem;
    font-weight: lighter;
    display: grid;
    place-items: center;
    /* text-align: center; */
  }
  .file {
    opacity: 0;
  }
  @media screen and (min-width: 1064px) {
    padding: 3rem 2rem 4rem 2rem;
    .contact-form {
      box-shadow: var(--light-shadow);
    }
    .loader {
      position: absolute;
      right: 30vw;
    }
  }
`
