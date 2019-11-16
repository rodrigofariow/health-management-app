import React from 'react'
import styled from 'styled-components'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  TextField,
  IconButton
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import DeleteIcon from '@material-ui/icons/Delete'
import { Focus } from './shared/types'
import { Field } from '../../../components/Field'
import PanelBody from './PanelBody'

type Props = {
  focus: Focus
  handleDeleteButtonClick(focusId: string): any
}

export default function PatientFocus({
  focus,
  handleDeleteButtonClick
}: Props) {
  const [isExpanded, setIsExpanded] = React.useState(true)

  function handlePanelClick() {
    setIsExpanded(expand => !expand)
  }

  function handleDeleteClick() {
    handleDeleteButtonClick(focus.id)
  }

  return (
    <ExpansionPanel expanded={isExpanded} onChange={handlePanelClick}>
      <FocusSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Foco</Typography>
        <IconButton aria-label="Delete" onClick={handleDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </FocusSummary>
      <PanelBody>
        <AdditionalNotes>
          <TextField multiline />
        </AdditionalNotes>
        <Field
          label="Dados relevantes para o diagnóstico"
          multiline
          // value={focus.relevantData}
        />
        <Field
          label="Diagnóstico de enfermagem"
          multiline /* value={focus.diagnosis} */
        />
        <Field label="Objetivos" multiline />
        <Field
          label="Intervenções de enfermagem"
          multiline
          // value={focus.interventions}
        />
        <Field label="Resultados obtidos" multiline />
      </PanelBody>
    </ExpansionPanel>
  )
}

const FocusSummary = styled(({ className, ...props }) => (
  <ExpansionPanelSummary classes={{ content: className }} {...props} />
))`
  display: flex;
  justify-content: space-between;
`

const AdditionalNotes = styled.div`
  margin-bottom: 15px;
  display: grid;
`
