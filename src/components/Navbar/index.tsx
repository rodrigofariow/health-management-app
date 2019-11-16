import React from 'react'
import styled from 'styled-components'
import UserInfo from './UserInfo'

function NavBar() {
  return (
    <Container>
      <LeftSection />
      <RightSection>
        <StyledUserInfo name="Tiago Maravilha" />
      </RightSection>
    </Container>
  )
}
export default NavBar

const Container = styled.div`
  background-color: dodgerblue;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`

const RightSection = styled.div`
  max-width: 170px;
`

const LeftSection = styled.div``

const StyledUserInfo = styled(UserInfo)`
  margin-right: 7px;
`
