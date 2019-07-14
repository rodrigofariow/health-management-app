import React from 'react'
import { shape, string, func } from 'prop-types'
import styled from 'styled-components'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  TextField,
  IconButton,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import DeleteIcon from '@material-ui/icons/Delete'
import Field from '../Field'
import PanelBody from '../PanelBody'

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

export default function PatientFocus({ focus, handleDeleteButtonClick }) {
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

PatientFocus.propTypes = {
  focus: shape({
    relevantData: string.isRequired,
    diagnosis: string.isRequired,
    interventions: string.isRequired,
  }),
  handleDeleteButtonClick: func.isRequired,
}
