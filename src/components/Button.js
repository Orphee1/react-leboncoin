import styled from 'styled-components'

import React from 'react'

export const Button = ({ children, ...restProps }) => {
  return (
    <Wrapper {...restProps}>
      <span>{children}</span>
    </Wrapper>
  )
}

const Wrapper = styled.button`
  width: 100%;
  padding: 10px 25px;
  margin: 10px auto;
  border: none;
  border-radius: var(--radius);
  outline: none;
  color: white;
  font-weight: bold;
  background: ${({ color }) => color};
`
