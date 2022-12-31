import React from 'react'
import styled from 'styled-components'

const ToggleBar = () => {
  return (
    <Wrapper>
      <div className='round1'></div>
      <div className='round2'></div>
    </Wrapper>
  )
}

export default ToggleBar

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0.2rem;
  background: var(--clr-orange);
  border-radius: var(--radius);
  margin-left: auto;
  margin-right: auto;
  .round1 {
    position: absolute;
    top: -0.6rem;
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid var(--clr-grey-2);
    border-radius: 50%;
    background: var(--clr-white-1);
  }
  .round2 {
    position: absolute;
    top: -0.6rem;
    right: 0%;
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid var(--clr-grey-2);
    border-radius: 50%;
    background: var(--clr-white-1);
  }
`
