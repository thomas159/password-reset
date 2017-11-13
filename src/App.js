import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import MobMenu from './components/MobMenu'
import Menu from './components/Menu'
import Header from './components/Header'
import Container from './atoms/Container'
import PasswordReset from './components/PasswordReset'
import background from './images/background.jpg'

const Wrap = styled.div`
  height: 100%;
  width: 100%;
`
const Main = styled.div`
  position:relative;
  min-height: 100vh;
  width:100%;
  background-image: url(${background});
  background-size: cover;

  &:before {
    content: '';
    position: absolute;
    top: 100px;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom right,#000,#000);
    opacity: .6;
  }
`

const App = () => {
  const menu1Data = [
    { id: 1, item: 'Home', url: 'Home' },
    { id: 2, item: 'GPS', url: 'GPS' },
    { id: 3, item: 'Service Desk', url: 'Service desk' },
    { id: 4, item: 'GBS', url: 'GBS' },
    { id: 5, item: 'Billing', url: 'Billing' },
    { id: 6, item: 'Security', url: 'Security' },
    { id: 7, item: 'MediusFlow Management', url: 'Security' },
    { id: 8, item: 'Administration', url: 'Security' },
    { id: 9, item: 'About', url: 'Security' },
  ]
  const menu2Data = [
    { id: 1, item: 'Service Desk Summary', url: 'passwordReset' },
    { id: 2, item: 'Reset User Password', url: 'passwordReset' },
    { id: 3, item: 'Reset User Password (NS)', url: 'passwordReset' },
    { id: 4, item: 'Disable User', url: 'passwordReset' },
    { id: 5, item: 'Enable User', url: 'passwordReset' },
    { id: 6, item: 'Add Group Members', url: 'passwordReset' },
    { id: 7, item: 'Remove Group Members', url: 'passwordReset' },
    { id: 8, item: 'Add Group Members sens.', url: 'passwordReset' },
    { id: 9, item: 'Remove Group Members Sens.', url: 'passwordReset' },
    { id: 10, item: 'User Templates', url: 'passwordReset' },
    { id: 11, item: 'Browse OU Objects', url: 'passwordReset' },
    { id: 12, item: 'Group Members', url: 'passwordReset' },
    { id: 13, item: 'Add Group Members HRLink', url: 'passwordReset' },
    { id: 14, item: 'Remove Group Members HRLink', url: 'passwordReset' },
    { id: 15, item: 'Unlock a user', url: 'passwordReset' },
    { id: 16, item: 'Object Moving', url: 'passwordReset' },
    { id: 17, item: 'Groups Management', url: 'passwordReset' },
    { id: 18, item: 'OUs Management', url: 'passwordReset' },
    { id: 19, item: 'Computer Management', url: 'passwordReset' },
    { id: 20, item: 'Add Group Members ACT', url: 'passwordReset' },
    { id: 21, item: 'Remove Group Members ACT', url: 'passwordReset' },
    { id: 22, item: 'ACT Groups Management', url: 'passwordReset' },
  ]
  return (
    <Router>
      <div>
        <Wrap>
          <Main>
            <Header />
            <Container>
              <Switch>
                <Route exact path="/" render={() => <Menu data={menu1Data} />} />
                <Route exact path="/activedirectory" render={() => <Menu data={menu2Data} />} />
                <Route exact path="/passwordReset" component={PasswordReset} />
              </Switch>
            </Container>
          </Main>
          <MobMenu />
        </Wrap>
      </div>
    </Router>
  )
}

export default App
