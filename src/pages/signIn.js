import React, { useState } from 'react'
import Axios from 'axios'
import Cookie from 'js-cookie'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SignIn = ({ setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Wrapper>
      <h1>Hello from Sign In Page</h1>
      <Link to='/user/sign_up'>
        <span>Créer un compte</span>
      </Link>
    </Wrapper>
  )
}

export default SignIn

const Wrapper = styled.main`
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
