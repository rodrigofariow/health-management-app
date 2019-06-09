import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const minSize = '24px'

const RoundImage = styled.img`
  border-radius: 50%;
  min-width: ${minSize};
  min-height: ${minSize};
  width: 24px;
`

const Title = styled.span`
  margin-left: 10px;
  color: white;
  font-size: 0.8em;
  font-weight: bold;
`

function UserInfo({ name = '' }) {
  return (
    <span>
      <RoundImage
        alt="User logo"
        src="https://ryanacademy.ie/wp-content/uploads/2017/04/user-placeholder-300x300.png"
      />
      <Title>{name}</Title>
    </span>
  )
}

UserInfo.propTypes = {
  name: string,
}

export default UserInfo
