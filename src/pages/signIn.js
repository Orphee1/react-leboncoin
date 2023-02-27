import React from 'react'
// import Axios from 'axios'
// import Cookie from 'js-cookie'

import styled from 'styled-components'
import img from '../images/login-illustration.png'
import { FormContainer } from '../containers/UI/form'

const SignIn = ({ setUser }) => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [isLoading, setIsLoading] = useState(false)

  return (
    <Wrapper>
      <FormContainer />
    </Wrapper>
  )
}

export default SignIn

const Wrapper = styled.main`
  min-height: calc(100vh - 4rem);
  display: flex;
  background-image: url(${img});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
