import {
  Box,
  BoxColumn,
  BoxFlex,
  BoxRelative,
  Button,
  ButtonShow,
  Container,
  Input,
  Label,
  Text,
  Title,
} from './styles/form'
import { AiFillEye } from 'react-icons/ai'

export const Form = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}

Form.Box = ({ children, ...restProps }) => {
  return <Box {...restProps}> {children} </Box>
}

Form.BoxColumn = ({ children, ...restProps }) => {
  return <BoxColumn {...restProps}> {children} </BoxColumn>
}

Form.BoxFlex = ({ children, ...restProps }) => {
  return <BoxFlex {...restProps}> {children} </BoxFlex>
}

Form.BoxRelative = ({ children, ...restProps }) => {
  return <BoxRelative {...restProps}> {children} </BoxRelative>
}

Form.Button = ({ children, ...restProps }) => {
  return (
    <Button {...restProps} type='submit'>
      {' '}
      {children}{' '}
    </Button>
  )
}

Form.ButtonShow = ({ ...restProps }) => {
  return (
    <ButtonShow {...restProps}>
      <AiFillEye />
    </ButtonShow>
  )
}

Form.Label = ({ children, htmlFor }) => {
  return <Label htmlFor={htmlFor}>{children}</Label>
}

Form.Input = ({ ...restProps }) => {
  return <Input {...restProps} />
}

Form.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}
Form.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
