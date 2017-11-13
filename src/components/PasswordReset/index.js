import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import H1 from '../../atoms/H1'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import Checkbox from '../../atoms/Checkbox'
import Warning from '../../atoms/Warning'
import { media } from '../../atoms/Container'
import * as palette from '../../Variables'

const Wrap = styled.div`
  flex: 0 0 100%;
  padding: 0 0 100px 0;
  ${media.giant`
    padding: 0 0 100px 0;
  `}
  ${media.desktop`
    padding: 0 0 100px 0;
  `}
  ${media.tablet`
    padding: 0 0 100px 0;
  `}
`

const InnerWrap = styled.div`
  padding:20px;
  background: rgba(66,83,99,0.95);
  color: #fff;
`

const MainWrap = styled.div`
  background: rgba(66,83,99,0.8);
  height: auto;
  padding: 10px;
`

const PasswordList = styled(Link)`
  margin:10px;
  color: ${palette.mediumGrey};
`

const PasswordReset = () => (
  <Wrap>
    <InnerWrap>
      <H1>Password reset tool</H1>
    </InnerWrap>
    <MainWrap>
      <Warning> Be aware that you are now setting a default password which will have to be changed at the first logon by the end user. We recommend to you to have the user connect with a network cable.</Warning>
      <Input text="Select a user" />
      <Input text="Default password" />
      <Input text="Confirm default password" />
      <Checkbox label="Password never expires" />
      <Checkbox label="User must change password at next logon" />
      <Input text="Service tickets" />
      <Input text="Comments" />
      <Button />
      <PasswordList to="/">Password reset list</PasswordList>
    </MainWrap>
  </Wrap>
)

export default PasswordReset
