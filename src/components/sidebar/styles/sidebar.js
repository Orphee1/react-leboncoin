import styled from 'styled-components/macro'

export const Container = styled.main`
  opacity: ${({ show }) => (show === 'visible' ? '1' : '0')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 479px;
    right: 0;
    bottom: 0;
    background: black;
    opacity: 0.6;
  }
  transition: var(--transition);
  transform: ${({ show }) =>
    show === 'visible' ? 'translateX(0)' : 'translateX(-100%)'};
  display: flex;
  flex-direction: column;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid var(--clr-grey-3);
`
export const BoxHorizontal = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 5px auto;
  margin-top: ${({ mt }) => mt || '5px'};
  padding: 8px 5px;
  border-radius: var(--radius);
  transition: var(--transition);
  background: ${({ orange }) => orange && 'rgb(254, 240, 233)'};
  svg {
    /* color: ${({ orange }) => (orange ? 'orange' : 'black')}; */
    color: ${({ svgClr }) => svgClr || 'black'};
    font-size: 1.5rem;
    margin-right: 10px;
    transition: var(--transition);
  }
  &:hover {
    background: var(--clr-grey-4);
  }
  &:hover svg {
    color: ${({ orange }) => orange && 'black'};
  }
`

export const Button = styled.button`
  background: transparent;
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  border-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  position: absolute;
  top: 0.5rem;
  left: 430px;
  z-index: 1000;
  svg {
    color: var(--clr-grey-3);
    &:hover {
      color: var(--clr-grey-2);
    }
  }
`
export const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--clr-grey-3);
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Inner = styled.aside`
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 478px;
  height: 100%;
  background: var(--clr-white-2);
  overflow: scroll;
`

export const Logo = styled.div`
  img {
    width: 150px;
  }
`
export const Text = styled.span`
  width: 100%;
  color: ${({ orange }) => (orange ? 'orange' : 'black')};
  font-weight: bold;
  &:hover {
    color: ${({ orange }) => orange && 'black'};
  }
`
export const TextLittle = styled.span`
  font-size: ${({ fs }) => fs || '13px'};
  color: ${({ color }) => color || 'black'};
`
