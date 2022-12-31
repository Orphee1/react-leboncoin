import { Box, Container, Input, Selecter, Text } from './styles/searchBox'
import options from '../../constants/selectOptions'

export const SearchBox = ({ children }) => {
  return <Container>{children}</Container>
}

SearchBox.Box = ({ children, ...restProps }) => {
  return <Box {...restProps}>{children}</Box>
}

SearchBox.Input = ({ children, ...restProps }) => {
  return (
    <Input type='search' {...restProps}>
      {children}
    </Input>
  )
}

SearchBox.Selecter = ({ children, ...restProps }) => {
  return <Selecter {...restProps}>{children}</Selecter>
}

SearchBox.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}
