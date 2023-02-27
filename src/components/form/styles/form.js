import styled from 'styled-components/macro'

export const Box = styled.div`
  /* background-color: green; */
  width: ${({ width }) => width || '100%'};
`
export const BoxColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const BoxFlex = styled(Box)`
  display: flex;
  justify-content: space-between;
`
export const BoxRelative = styled(Box)`
  position: relative;
`

export const ButtonShow = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 0.4rem;
  svg {
    color: var(--clr-grey-2);
    font-size: 1.6rem;
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: var(--clr-blue);
  color: var(--clr-white);
  font-weight: bold;
  font-size: 0.9rem;
  border: none;
  border-radius: var(--radius);
  outline: none;
  &:hover {
    background-color: #336699;
  }
`

export const Container = styled.form`
  background-color: var(--clr-white);
  margin: 0 auto;
  padding: 2rem;
  width: 32%;
  max-width: 40rem;
  height: 35rem;
  border-radius: var(--radius);
  -webkit-box-shadow: 0px 1px 6px 4px rgba(194, 194, 194, 0.36);
  box-shadow: 0px 1px 6px 4px rgba(194, 194, 194, 0.36);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`
export const Input = styled.input`
  width: 100%;
  margin-top: 0.3rem;
  padding: 0.7rem;
  border: ${({ border }) => border};
  border-radius: var(--radius);
`
export const Label = styled.label`
  font-weight: bold;
  font-size: 1rem;
`

export const Text = styled.span`
  font-size: ${({ small }) => small && '0.75rem'};
  color: ${({ color }) => color};
`
export const Title = styled.h3`
  margin-bottom: 1rem;
`
