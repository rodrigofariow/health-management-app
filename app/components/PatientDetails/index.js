import React from 'react'
import styled from 'styled-components'
import ServiceSection from '../ServiceSection'
import PatientFocus from '../PatientFocus'

const Container = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
`

const Content = styled.div`
  max-width: 1300px;
  width: 100%;
`

export default function PatientDetails() {
  return (
    <Container>
      <Content>
        <ServiceSection />
        <PatientFocus />
      </Content>
    </Container>
  )
}
