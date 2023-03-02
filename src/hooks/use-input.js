import { useState } from 'react'

export const useInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const valueIsValid = validate(enteredValue)

  const inputHasError = !valueIsValid && isTouched

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value)
  }

  const inputBlurHandler = () => {
    setIsTouched(true)
  }

  const reset = () => {
    setEnteredValue('')
    setIsTouched(false)
  }

  return {
    value: enteredValue,
    valueIsValid,
    inputHasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  }
}
