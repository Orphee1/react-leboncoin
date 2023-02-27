import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../../components'

export const FormContainer = () => {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true)

  const mailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
    setEnteredEmailIsValid(true)
  }

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    if (enteredEmail.trim() === '') {
      setEnteredEmailIsValid(false)
      return
    }

    setEnteredEmailIsValid(true)

    console.log(enteredEmail, enteredPassword)
    setEnteredEmail('')
    setEnteredPassword('')
  }

  return (
    <Form method='post' onSubmit={formSubmissionHandler}>
      <Form.BoxColumn>
        <Form.Title>Bonjour!</Form.Title>
        <Form.Text>
          Connectez-vous pour découvrir toutes nos fonctionnalités
        </Form.Text>
      </Form.BoxColumn>
      <Form.Box>
        <Form.BoxFlex>
          <Form.Label htmlFor='email'>E-mail</Form.Label>
          <Form.Text small color='#939ea9'>
            champ requis
          </Form.Text>
        </Form.BoxFlex>
        <Form.Input
          id='email'
          type='email'
          name='email'
          border={`${
            enteredEmailIsValid ? '1px solid #c4cbcf ' : '1px solid #FF6E13'
          }`}
          value={enteredEmail}
          onChange={mailInputChangeHandler}
        />
        {!enteredEmailIsValid && (
          <Form.Text small color='red'>
            champ requis
          </Form.Text>
        )}
      </Form.Box>
      <Form.Box>
        <Form.BoxFlex>
          <Form.Label htmlFor='password'>Mot de passe</Form.Label>
          <Form.Text small color='#939ea9'>
            champ requis
          </Form.Text>
        </Form.BoxFlex>
        <Form.BoxRelative>
          <Form.Input
            id='password'
            type='password'
            name='password'
            border={`${
              enteredEmailIsValid ? '1px solid #c4cbcf ' : '1px solid #FF6E13'
            }`}
            value={enteredPassword}
            onChange={passwordInputChangeHandler}
          />
          <Form.ButtonShow />
        </Form.BoxRelative>
        <Form.Text color='#4183D7'>Mot de passe oublié</Form.Text>
      </Form.Box>
      <Form.Button>Se connecter</Form.Button>
      <Form.BoxFlex width='70%'>
        <Form.Text>Envie de nous rejoindre?</Form.Text>
        <Link to='/user/sign_up'>
          <Form.Text color='#4183D7'>Créer un compte</Form.Text>
        </Link>
      </Form.BoxFlex>
    </Form>
  )
}
