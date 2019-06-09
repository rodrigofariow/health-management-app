import React from 'react'
import styled from 'styled-components'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core'
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons'
import Field from '../Field'

const FocusDetails = styled(ExpansionPanelDetails)`
  &&& {
    display: grid;
  }
  grid-row-gap: 10px;
`

export default function PatientFocus() {
  const [isExpanded, setIsExpanded] = React.useState(false)

  function handlePanelClick() {
    setIsExpanded(expand => !expand)
  }
  return (
    <ExpansionPanel expanded={isExpanded} onChange={handlePanelClick}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Foco</Typography>
      </ExpansionPanelSummary>
      <FocusDetails>
        <Field label="Dados relevantes para o diagnóstico" multiline />
        <Field label="Diagnóstico" multiline />
        <Field label="Intervenções de Enfermagem" multiline />
      </FocusDetails>
    </ExpansionPanel>
  )
}
