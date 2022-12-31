import { Button } from './styles/skipButton'

export const SkipButton = ({ children, value, ...restProps }) => {
  return (
    <Button type='button' {...restProps}>
      {value}
      {children}
    </Button>
  )
}
