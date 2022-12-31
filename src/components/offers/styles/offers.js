import styled from 'styled-components/macro'

export const Container = styled.section`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
  }
`
