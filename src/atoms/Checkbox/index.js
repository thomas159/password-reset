import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import { media } from '../../atoms/Container'

const Grid = styled.div`
display: flex;
flex-wrap: wrap;
padding: 10px;
`

const LabelWrap = styled.div`
display:flex;
flex: 0 0 100%;
padding: 0 20px 0 0;
${media.giant`
flex: 0 0 400px;
padding: 0 20px 0 0;
`}
${media.desktop`
flex: 0 0 400px;
padding: 0 20px 0 0;
`}
`

const Cell = styled.div`
display:flex;
flex: 0 0 100%;
padding: 0 20px 0 0;
${media.giant`
flex: 0 0 auto;
padding: 0 20px 0 0;
`}
${media.desktop`
flex: 0 0 auto;
padding: 0 20px 0 0;
`}
`

const StyledLabel = styled.label`
  flex: 0 0 auto;
  padding: 0 0 2px 0;
  font-size: 16px;
  color: #fff;
  border-radius: 4px 0 0 4px;
`

const StyledCheckbox = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
`
const Checkbox = props => (
  <Grid>
    <LabelWrap><StyledLabel>{props.label}</StyledLabel></LabelWrap>
    <Cell><StyledCheckbox type="checkbox" /></Cell>
  </Grid>
)

Checkbox.propTypes = {
  label: string,
}

Checkbox.defaultProps = {
  label: '',
}

export default Checkbox
