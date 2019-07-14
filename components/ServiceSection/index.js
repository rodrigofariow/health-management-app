import React from 'react'
import styled from 'styled-components'
import { Paper, Typography } from '@material-ui/core'
import PanelBody from '../PanelBody'
import Field from '../Field'

const Container = styled(Paper)`
  max-width: 1300px;
`

const HeaderSummary = styled.div`
  padding: 12px 24px 12px 24px;
`

export default function ServiceSection() {
  return (
    <Container>
      <HeaderSummary>
        <Typography>Serviço</Typography>
      </HeaderSummary>
      <PanelBody>
        <Field label="Cenário" placeholder="Iniciais do utente" />
        <Field multiline label="Antecedentes pessoais" />
      </PanelBody>
    </Container>
  )
}
