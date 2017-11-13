import React from 'react'
import styled from 'styled-components'
import { object } from 'prop-types'
import * as palette from '../../Variables'


const Wrap = styled.div`
  display:flex;
  padding: 10px;
  color: #fff;
  background: rgba(${palette.rgbRed} 0.8);
  margin: 10px;

`

const Warning = props => (
  <Wrap>{props.children}</Wrap>
)

Warning.propTypes = {
  children: object, // eslint-disable-line
}

export default Warning
