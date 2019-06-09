import React from 'react'
import styled from 'styled-components'
import UserInfo from '../UserInfo'

const Container = styled.div`
  background-color: cornflowerblue;
  display: grid;
  padding: 0 7px 0 7px;
  width: 100%;
  height: 50px;
`

const RightSection = styled.div`
  justify-self: self-end;
`

const LeftSection = styled.div`
  justify-self: self-start;
`

function NavBar() {
  return (
    <Container>
      <LeftSection />
      <RightSection>
        <UserInfo name="Tiago Maravilha" />
      </RightSection>
    </Container>
  )
}
export default NavBar
