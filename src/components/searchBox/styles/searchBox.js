import styled from 'styled-components/macro'

export const Container = styled.footer`
  width: 65%;
  height: auto;
  margin: 3rem auto;
  padding: 2rem;
  background: var(--clr-white-2);
  border-radius: var(--radius);
  box-shadow: 0 -1px 4px 0 rgb(26 26 26 / 8%), 0 4px 8px 0 rgb(26 26 26 / 12%);
  display: flex;
  flex-direction: column;
`
export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: var(--radius);
  color: var(--clr-grey-2);
  background: hsl(200, 16%, 96%);
`

export const Selecter = styled.select`
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: var(--radius);
  color: var(--clr-grey-2);
  background-color: hsl(200, 16%, 96%);
`
export const Text = styled.span`
  font-size: 1rem;
  color: black;
`
