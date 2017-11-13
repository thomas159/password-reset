import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import * as palette from '../../Variables'
import './styles.css'

const Wrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height:80px;
`

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction:row;
  height: 100%;
`

const Cell = styled.div`
  display: flex;
  flex: 0 0 50%;
  justify-content: center;
  align-items: center;
  color: ${palette.lightGrey};
`

const StyledNavLink = styled(NavLink)`
display: flex;
flex:1;
height: 100%;
justify-content: center;
align-items: center;
`

const MobMenu = () => (
  <Wrap>
    <Grid>
      <Cell>
        <StyledNavLink exact className="nav" activeClassName="selected" to="/" >Main menu</StyledNavLink>
      </Cell>
      <Cell>
        <StyledNavLink className="nav" activeClassName="selected" to="/activedirectory" >Active directory</StyledNavLink>
      </Cell>
    </Grid>
  </Wrap>
)

export default MobMenu
