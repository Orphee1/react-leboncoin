import styled from 'styled-components/macro'

export const Box = styled.ul`
  display: flex;
  height: auto;
  justify-content: space-between;
`
export const BoxVertical = styled(Box)`
  background: purple;
  display: flex;
  flex-direction: column;
`
export const Button = styled.button`
  border: none;
  border-radius: ${(props) => (props.br ? '0.25rem' : '')};
  outline: none;
  cursor: pointer;
  height: auto;
  padding: 5px 10px;
  background: ${(props) => (props.orange ? '#ff6e14' : 'white')};
  color: ${(props) => (props.orange ? 'white' : '#1a1a1a')};
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  svg {
    font-size: 25px;
    font-weight: bold;
    margin: auto 5px;
  }
`

export const ButtonVertical = styled(Button)`
  padding: 5px;
  flex-direction: column;
  font-size: 13px;
  font-weight: 300;
  svg {
    margin: 0 auto 5px auto;
  }
`

export const Container = styled.header`
  position: sticky;
  z-index: 100;
  top: 0;
  width: 100%;
  height: auto;
  padding: 12px;
  display: flex;
  align-items: center;
  background: var(--clr-white);
  -webkit-box-shadow: 0px 1px 13px 1px rgba(115, 115, 115, 0.42);
  box-shadow: 0px 1px 13px 1px rgba(115, 115, 115, 0.42);
`
export const Center = styled.section`
  width: 75%;
  max-width: var(--max-width);
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    display: none;
  } ;
`

export const HambMenu = styled.div`
  margin-left: 10px;
  cursor: pointer;
  svg {
    font-size: 2rem;
    color: var(--clr-orange);
  }

  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`

export const List = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
`
export const ListHover = styled(List)`
  transition: var(--transition);
  &:hover {
    border-bottom: ${(props) =>
      props.hover_orange ? '2px solid #FF6E13' : '2px solid black'};
  }
`
export const ListHoverHidden = styled(List)`
  transition: var(--transition);
  &:hover {
    border-bottom: ${(props) =>
      props.hover_orange ? '2px solid #FF6E13' : '2px solid black'};
    button {
      font-weight: bold;
    }
  }
  &:hover section {
    visibility: visible;
  }
`

export const Logo = styled.div`
  img {
    width: 150px;
  }
`

export const LogoSmallScreen = styled(Logo)`
  margin: 10px auto;
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`

export const Row = styled.ul`
  /* background: blue; */
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px auto 0 auto;
`

export const SubLinks = styled.section`
  position: absolute;
  top: 7.06rem;
  left: 12.5%;
  width: 75%;
  visibility: hidden;
  padding: 2rem;
  background: var(--clr-white);
  border: 1px solid black;
  border-radius: var(--radius);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 2rem;
  grid-gap: 1rem 4rem;
`
