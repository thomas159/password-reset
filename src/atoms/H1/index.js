import React from 'react'
import styled from 'styled-components'
import { object } from 'prop-types'

const Wrap = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`

const H1 = props => (
  <Wrap>{props.children}</Wrap>
)

H1.propTypes = {
  children: object, // eslint-disable-line
}

export default H1
