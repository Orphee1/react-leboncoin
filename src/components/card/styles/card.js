import styled from 'styled-components/macro'

export const Container = styled.div`
  width: 45rem;
  height: 11rem;
  margin: 10px auto;
  display: flex;
  border: 1px solid var(--clr-grey-3);
  border-radius: var(--radius);
  @media screen and (max-width: ${({ theme }) => theme.large_mobile}) {
    width: 30rem;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  &:hover h4 {
    transition: var(--transition);
    color: var(--clr-orange);
  }
`
export const BoxInfo = styled(Box)`
  position: relative;
  padding: 20px;
  /* flex: 1.4 1 0%; */
  flex: 1.4;
  ${({ sb }) => sb && `justify-content: space-between`};
  @media screen and (max-width: ${({ theme }) => theme.large_mobile}) {
    /* flex: 1 0 100%; */
  }
`
export const BoxImage = styled(Box)`
  /* flex: 0.6 0 10rem; */
  flex: 0.6 1 0%;
`

export const HeartIcon = styled.div`
  position: absolute;
  top: 80%;
  right: 5%;
  svg {
    font-size: 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    &:hover {
      color: var(--clr-grey-2);
    }
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
`

export const Text = styled.span`
  color: ${({ clr }) => clr || 'black'};
  font-size: ${({ fs }) => fs || '12px'};
`
export const Title = styled.h4`
  color: var(--clr-black);
  margin-bottom: 8px;
`
