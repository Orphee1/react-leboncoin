import React from 'react'
import styled from 'styled-components'
import img from '../images/login-illustration.png'
import { SignUpFormContainer } from '../containers/UI'

const SignUp = () => {
  return (
    <Wrapper>
      <SignUpFormContainer />
    </Wrapper>
  )
}

export default SignUp

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
