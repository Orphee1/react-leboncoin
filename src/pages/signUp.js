import React from 'react'
// import Axios from 'axios'
// import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const SignUp = ({ setUser }) => {
  return (
    <Wrapper>
      <h1>Hello from Sign Up Page</h1>
      <Link to='/user/sign_in'>
        <span>Vous avez déjà un compte?</span>
      </Link>
    </Wrapper>
  )
}

export default SignUp

const Wrapper = styled.main`
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
