import React from 'react'
import styled from 'styled-components'
import { Paper, Typography } from '@material-ui/core'
import Field from '../Field'

const Container = styled(Paper)`
  max-width: 1300px;
`

const HeaderSummary = styled.div`
  padding: 12px 24px 12px 24px;
`

const FieldSection = styled.div`
  display: grid;
  padding: 20px 10px 20px 10px;
  grid-row-gap: 20px;
`

export default function ServiceSection() {
  return (
    <Container>
      <HeaderSummary>
        <Typography>Serviço</Typography>
      </HeaderSummary>
      <FieldSection>
        <Field label="Nome" placeholder="Iniciais do Utente" />
        <Field multiline label="Antecedentes Pessoais" />
      </FieldSection>
    </Container>
  )
}
