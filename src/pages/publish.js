import { useState } from 'react'
import useHttp from '../hooks/use-http'
import Axios from 'axios'
import Cookie from 'js-cookie'
import styled from 'styled-components'
import options from '../constants/selectOptions'
import { products } from '../constants/data'
const product = products[0]

const publishOfferConfig = {
  url: `${process.env.REACT_APP_WEBADDRESS}/api/v1`,
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: product,
}

const Publish = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleResult = (result) => {
    console.log(result)
  }

  const { sendRequest: publishOffer } = useHttp(handleResult)

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
        process.env.REACT_APP_WEBADDRESS + '/api/v1/offer',
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
      // history.push('/')
    } catch (error) {
      console.log(error)
      alert('An error occurred sending product')
      setIsLoading(false)
    }
  }

  // const addProductHandler = async () => {
  //   console.log('fired')
  //   const response = await fetch('http://localhost:4000/api/v1', {
  //     method: 'POST',
  //     body: JSON.stringify(product),
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   })
  //   const data = await response.json()
  //   console.log(data)
  // }

  const handleClick = () => {
    publishOffer(publishOfferConfig)
  }

  return (
    <Wrapper>
      <h1>Hello from Publish Page</h1>
      <button onClick={handleClick}>Déposer une annonce</button>
    </Wrapper>
  )
}

export default Publish

const Wrapper = styled.main`
  min-height: calc(100vh - 4rem);
  /* background: var(--clr-white); */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  button {
    padding: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
`
