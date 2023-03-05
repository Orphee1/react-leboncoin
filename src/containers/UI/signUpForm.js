import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../store/auth-slice'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from '../../components'
import { useInput } from '../../hooks/use-input'

export const SignUpFormContainer = () => {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.auth)

  const navigate = useNavigate()
  const {
    value: nameValue,
    valueIsValid: nameValueIsValid,
    inputHasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== '')

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

  const formIsValid =
    nameValueIsValid && emailValueIsValid && passwordValueIsValid

  const formSubmissionHandler = async (event) => {
    event.preventDefault()
    if (!formIsValid) {
      return
    }

    try {
      const response = await Axios.post(
        process.env.REACT_APP_WEBADDRESS + '/api/v1/user/sign_up',
        {
          username: nameValue,
          email: emailValue,
          password: passwordValue,
        }
      )

      if (response.data) {
        const { username, token } = response.data
        dispatch(
          authActions.logIn({
            receivedUserName: username,
            receivedToken: token,
          })
        )
        setTimeout(() => {
          navigate('/')
        }, 5000)
      }
    } catch (error) {
      console.log(error)
    }

    resetName()
    resetEmail()
    resetPassword()
  }

  return (
    <Form method='post' onSubmit={formSubmissionHandler}>
      <Form.BoxColumn>
        <Form.Title>Créez un compte</Form.Title>
        {isLoggedIn && (
          <Form.Text>
            Votre compte a été créé avec succès, vous allez être redirigé vers
            la page d'accueil
          </Form.Text>
        )}
        {!isLoggedIn && (
          <Form.Text>
            Bénéficiez d'une expérience personnalisée avec du contenu en lien
            avec votre activité et vos centres d'intérêt sur notre service
          </Form.Text>
        )}
      </Form.BoxColumn>
      <Form.Box>
        <Form.BoxFlex>
          <Form.Label htmlFor='name'>Nom d'utilisateur</Form.Label>
          <Form.Text small color='#939ea9'>
            champ requis
          </Form.Text>
        </Form.BoxFlex>
        <Form.Input
          id='name'
          name='name'
          border={`${
            nameInputHasError ? '1px solid #FF6E13' : '1px solid #c4cbcf '
          }`}
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <Form.Text small color='red'>
            champ requis
          </Form.Text>
        )}
      </Form.Box>
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
        {passwordInputHasError && (
          <Form.Text small color='red'>
            champ requis
          </Form.Text>
        )}
      </Form.Box>

      <Form.Button cursor={`${formIsValid ? 'pointer' : 'not-allowed'}`}>
        Envoyer
      </Form.Button>
      <Form.BoxFlex width='70%'>
        <Form.Text>Vous avez déjà un compte?</Form.Text>
        <Link to='/user/sign_in'>
          <Form.Text color='#4183D7'>Me connecter</Form.Text>
        </Link>
      </Form.BoxFlex>
    </Form>
  )
}
