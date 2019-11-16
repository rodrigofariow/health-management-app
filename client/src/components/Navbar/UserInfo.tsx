import React from 'react'
import styled from 'styled-components'

function UserInfo({ name = '' }) {
  return (
    <Container>
      <RoundImage
        alt="User logo"
        src="https://ryanacademy.ie/wp-content/uploads/2017/04/user-placeholder-300x300.png"
      />
      <Title>{name}</Title>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

const minSize = '24px'

const RoundImage = styled.img`
  border-radius: 50%;
  min-width: ${minSize};
  min-height: ${minSize};
  width: 24px;
`

const Title = styled.div`
  margin-left: 10px;
  color: white;
  font-size: 0.8em;
  white-space: nowrap;
  overflow: hidden;
  font-weight: bold;
  text-overflow: ellipsis;
`

export default UserInfo
