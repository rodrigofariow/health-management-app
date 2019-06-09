import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../SectionHeader'
import Field from '../Field'

const Container = styled.div`
  border: 6px solid lightgray;
  border-radius: 2px;
  max-width: 1300px;
`

const FieldSection = styled.div`
  display: grid;
  padding: 20px 10px 20px 10px;
  grid-row-gap: 20px;
`

export default function ServiceSection() {
  return (
    <Container>
      <SectionHeader title="Serviço" />
      <FieldSection>
        <Field label="Nome" placeholder="Iniciais do Utente" />
        <Field multiline label="Antecedentes Pessoais" />
      </FieldSection>
    </Container>
  )
}
