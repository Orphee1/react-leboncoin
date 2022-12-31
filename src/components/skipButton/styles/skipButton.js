import styled from 'styled-components/macro'

export const Button = styled.button`
  padding: 10px 12px;
  margin: auto 5px;
  background: var(--clr-white);
  font-size: 1rem;
  font-weight: bold;
  color: var(--clr-black);
  border: none;
  border-radius: var(--radius);
  cursor: ${(props) => (props.inv === 'inv' ? '' : 'pointer')};
  transition: var(--transition);
  &:hover {
    ${({ inv }) => !inv && `background: hsl(200, 16%, 96%)`};
  }
  &:active {
    background: var(--clr-black);
  }
  svg {
    font-size: 1rem;
    ${({ inv }) => inv && `color: hsl(200, 10%, 79%)`}
  }
`
