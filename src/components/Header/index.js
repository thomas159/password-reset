import React from 'react'
import styled from 'styled-components'
import * as palette from '../../Variables'
import logo from '../../images/logo.png'

const Wrap = styled.div`
  width: 100%;
  height: 100px;
  background: ${palette.primaryGrey};
`


const Header = () => (
  <Wrap>
    <img src={logo} alt="logo" />
  </Wrap>
)

export default Header
