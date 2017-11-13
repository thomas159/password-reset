import React from 'react'
import styled from 'styled-components'
import * as palette from '../../Variables'

const Wrap = styled.div`
  margin: 10px;
`

const StyledButton = styled.button`
  display:flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${palette.primaryYellow};
  color: #fff;
  cursor: pointer;
  transition: ${palette.transition};

  &:hover {
    background: ${palette.primaryYellow};
    color: fff;
  }
`

const Button = () => (
  <Wrap>
    <StyledButton value="submit" type="submit"> Submit</StyledButton>
  </Wrap>
)

export default Button
