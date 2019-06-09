import React from 'react'
import styled from 'styled-components'
import { string, func } from 'prop-types'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0 5px 0;
`

const Label = styled.span`
  color: black;
  font-weight: 800;
`

export default function SectionHeader({ className, onClick, title }) {
  return (
    <Container className={className} onClick={onClick}>
      <Label>{title}</Label>
    </Container>
  )
}

SectionHeader.propTypes = {
  title: string.isRequired,
  onClick: func.isRequired,
  className: string,
}
