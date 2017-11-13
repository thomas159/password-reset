import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import './styles.css'
import { media } from '../../atoms/Container'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`

const Cell = styled.div`
  display:flex;
  flex: 0 0 100%;
  ${media.giant`
  flex: 0 0 400px;
  padding: 0 20px 0 0;
`}
${media.desktop`
  flex: 0 0 400px;
  padding: 0 20px 0 0;
`}
`

const StyledLabel = styled.label`
  flex: 0 0 auto;
  padding: 0 0 2px 0;
  font-size: 16px;
  color: #fff;

`

const StyledInput = styled.input`
  flex: 1 1 100%;
  background: #fff;
  padding: 5px;
  outline: 0;
  border: 0;
`

const Input = props => (
  <Grid>
    <Cell><StyledLabel>{props.text}</StyledLabel></Cell>
    <Cell><StyledInput /></Cell>
  </Grid>
)

Input.propTypes = {
  text: string,
}

Input.defaultProps = {
  text: '',
}
export default Input
