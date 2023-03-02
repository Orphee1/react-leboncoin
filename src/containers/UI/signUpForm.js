import { Link } from 'react-router-dom'
import { Form } from '../../components'
import { useInput } from '../../hooks/use-input'

export const SignUpFormContainer = () => {
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

  const formSubmissionHandler = (event) => {
    event.preventDefault()
    resetEmail()
    resetPassword()
    console.log('fired')
  }

  return (
    <Form method='post' onSubmit={formSubmissionHandler}>
      <Form.BoxColumn>
        <Form.Title>Créez un compte</Form.Title>
        <Form.Text>
          Bénéficiez d'une expérience personnalisée avec du contenu en lien avec
          votre activité et vos centres d'intérêt sur notre service
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
