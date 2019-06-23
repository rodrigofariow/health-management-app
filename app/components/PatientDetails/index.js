import React from 'react'
import { uniqueId } from 'lodash'
import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { ActionPanel, Container, Content } from './styled'
import { useBindedActionsReducer } from '../../utils/hooks'
import { createComponentReducer } from '../../utils/redux'
import ServiceSection from '../ServiceSection'
import FocusList from './FocusList'

function focusGenerator() {
  return {
    id: uniqueId('focus'), // Would be replaced by a real ID after creating it in the server
    relevantData: '',
    diagnosis: '',
    interventions: '',
  }
}

const initialState = {
  focuses: [focusGenerator()],
}

const reducerObject = {
  addFocus: draft => {
    draft.focuses.push(focusGenerator())
  },
  deleteFocus: (draft, { payload: focusId }) => {
    const focusIndex = draft.focuses.findIndex(focus => focus.id === focusId)
    draft.focuses.splice(focusIndex, 1)
  },
}

const reducer = createComponentReducer(reducerObject)

export default function PatientDetails() {
  const [state, actions] = useBindedActionsReducer(
    reducer,
    reducerObject,
    initialState,
  )

  function handleDeleteButtonClick(focusId) {
    actions.deleteFocus(focusId)
  }

  return (
    <Container>
      <Content>
        <ServiceSection />
        <ActionPanel>
          <Button
            variant="contained"
            color="primary"
            onClick={actions.addFocus}
          >
            <AddIcon />
            Adicionar Foco
          </Button>
        </ActionPanel>
        <FocusList
          focuses={state.focuses}
          handleDeleteButtonClick={handleDeleteButtonClick}
        />
      </Content>
    </Container>
  )
}
