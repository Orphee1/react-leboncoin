import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authActions } from '../store/auth-slice'
import styled from 'styled-components'

const Profile = () => {
  const dispatch = useDispatch()
  const { userName } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const handleClickButton = () => {
    dispatch(authActions.logOut())
    navigate('/')
  }

  return (
    <Wrapper>
      <section className='center'>
        {userName && (
          <h2>{`Bonjour ${userName}, Bienvenue sur votre page personnelle`}</h2>
        )}
        {!userName && <h1>Oops! Comment êtes vous arrivé là?</h1>}

        <button onClick={handleClickButton}>Me déconnecter</button>
      </section>
    </Wrapper>
  )
}

export default Profile

const Wrapper = styled.main`
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 30%;
    padding: 0.8rem;
    background-color: var(--clr-blue);
    color: var(--clr-white);
    font-weight: bold;
    font-size: 0.9rem;
    border: none;
    border-radius: var(--radius);
    outline: none;
    cursor: pointer;
    &:hover {
      background-color: #336699;
    }
  }

  .center {
    width: 40%;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
  }
`
