import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from '../../components'
import { useInput } from '../../hooks/use-input'

export const SignInFormContainer = () => {
  const navigate = useNavigate()
  const {
    value: emailValue,
    valueIsValid: emailValueIsValid,
    inputHasError: emailInputHasError,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== '')

  const {
    value: passwordValue,
    valueIsValid: passwordValueIsValid,
    inputHasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim() !== '')

  const formIsValid = emailValueIsValid && passwordValueIsValid

  const formSubmissionHandler = async (event) => {
    event.preventDefault()
    if (!formIsValid) {
      return
    }

    console.log((emailValue, passwordValue))

    try {
      const response = await Axios.post(
        process.env.REACT_APP_WEBADDRESS + '/api/v1/user/log_in',
        {
          email: emailValue,
          password: passwordValue,
        }
      )
      if (response.data) {
        console.log(response.data)
        // store token and determine isLoggedIn status with a login function privides by redux ui slice
        // store username
        // redirect to='/'
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }

    resetEmail()
    resetPassword()
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
            emailInputHasError ? '1px solid #FF6E13' : '1px solid #c4cbcf '
          }`}
          value={emailValue}
          onChange={mailChangeHandler}
          onBlur={mailBlurHandler}
        />
        {emailInputHasError && (
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
              passwordInputHasError ? '1px solid #FF6E13' : '1px solid #c4cbcf '
            }`}
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          <Form.ButtonShow />
        </Form.BoxRelative>

        <Form.Text color='#4183D7' mr>
          Mot de passe oublié
        </Form.Text>
        {passwordInputHasError && (
          <Form.Text small color='red'>
            champ requis
          </Form.Text>
        )}
      </Form.Box>

      <Form.Button cursor={`${formIsValid ? 'pointer' : 'not-allowed'}`}>
        Se connecter
      </Form.Button>
      <Form.BoxFlex width='70%'>
        <Form.Text>Envie de nous rejoindre?</Form.Text>
        <Link to='/user/sign_up'>
          <Form.Text color='#4183D7'>Créer un compte</Form.Text>
        </Link>
      </Form.BoxFlex>
    </Form>
  )
}
