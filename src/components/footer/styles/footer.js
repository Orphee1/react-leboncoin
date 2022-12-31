import styled from 'styled-components/macro'

export const Box = styled.div`
  display: flex;
  svg {
    color: var(--clr-white);
    font-size: 1.6rem;
    margin-left: 5px;
    cursor: pointer;
  }
`

export const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0.5rem;
  margin-bottom: 10px;
`

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--clr-grey-1);
  height: auto;
  padding: 10px;
`

export const Image = styled.img`
  width: 120px;
  margin-bottom: 10px;
`
export const ImageBox = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2px;
`
export const Line = styled.div`
  height: 4px;
  width: 100%;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--clr-white);
`

export const Link = styled.a`
  width: auto;
  color: var(--clr-white);
  cursor: pointer;
  font-size: 13px;
  &:hover {
    border-bottom: 1px solid var(--clr-white);
  }
`

export const LinkBox = styled.div`
  height: auto;
  margin-bottom: 5px;
`

export const Row = styled.section`
  width: 90%;
  max-width: 1120px;
  margin: auto;
`
export const RowNone = styled(Row)`
  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`

export const RowBetween = styled(Row)`
  display: flex;
  justify-content: space-between;
`
export const RowGrid = styled(Row)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  padding-bottom: 20px;
  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`

export const Select = styled.select`
  background: var(--clr-white);
  color: var(--clr-grey-1);
  border: none;
  padding: 10px;
  border-radius: var(--radius);
  outline: none;
`

export const Text = styled.span`
  color: var(--clr-white);
`

export const Title = styled.h4`
  color: var(--clr-white);
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 10px;
  margin-top: 10px;
  text-transform: uppercase;
  margin-bottom: 5px;
`
