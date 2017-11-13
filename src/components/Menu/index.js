import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { array } from 'prop-types'
import { media } from '../../atoms/Container'
import * as palette from '../../Variables'

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 2px 2px 80px 2px;
  ${media.tablet`
  padding: 0 0 80px 0;
  `}
`

const Cell = styled.li`
  flex: 0 0 50%;
  display: flex;
  padding: 2px;
  ${media.giant`
  flex: 0 0 16.6666666667%
  `}
  ${media.desktop`
  flex: 0 0 20%;
  `}
  ${media.tablet`
  flex: 0 0 33.33333333%
  `}
`

const StyledLink = styled(Link)`
  display: flex;
  flex: 0 0 100%;
  height: 100px;
  border: 1px solid ${palette.primaryYellow};
  color: ${palette.primaryYellow};
  background: rgba(66, 83, 99, 0.9);
  justify-content: center;
  align-items: center;
  text-align:center;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  text-decoration:none;
  transition: ${palette.transition};
  ${media.giant`
    height: 150px;
  `}
  ${media.desktop`
    height: 125px;
  `}
  ${media.tablet`
    height: 100px;
  `}

  &:hover {
    background: ${palette.lightGrey};
    color: ${palette.primaryGrey};
}
`

const Menu = ({ data }) => (
  <Grid>
    {
      data.map(item => (
        <Cell>
          <StyledLink to={item.url}>{item.item}</StyledLink>
        </Cell>
      ),
      )
    }
  </Grid>
)

Menu.propTypes = {
  data: array, // eslint-disable-line
}

Menu.defaultProps = {
  data: '',
}
export default Menu
