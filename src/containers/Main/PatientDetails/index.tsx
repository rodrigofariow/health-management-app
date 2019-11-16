import React from 'react'
import { uniqueId } from 'lodash'
import { Button } from '@material-ui/core'
import { useImmer } from 'use-immer'
import AddIcon from '@material-ui/icons/Add'
import FocusList from './FocusList'
import styled from 'styled-components'
import ServiceSection from './ServiceSection'
import { Focus } from './shared/types'

function focusGenerator(): Focus {
  return {
    id: uniqueId('focus'), // Would be replaced by a real ID after creating it in the server
    relevantData: '',
    diagnosis: '',
    interventions: ''
  }
}

const initialState = () => [focusGenerator()]

type State = ReturnType<typeof initialState>

const addFocus = (draft: State) => {
  draft.push(focusGenerator())
}
const deleteFocus = (focusId: string) => (draft: State) => {
  draft.splice(draft.findIndex(focus => focus.id === focusId), 1)
}

export default function PatientDetails() {
  const [focuses, send] = useImmer(initialState)

  function handleDeleteButtonClick(focusId: string) {
    send(deleteFocus(focusId))
  }

  return (
    <Container>
      <Content>
        <ServiceSection />
        <ActionPanel>
          <Button
            variant="contained"
            color="primary"
            onClick={_ => send(addFocus)}
          >
            <AddIcon />
            Adicionar Foco
          </Button>
        </ActionPanel>
        <FocusList
          focuses={focuses}
          handleDeleteButtonClick={handleDeleteButtonClick}
        />
      </Content>
    </Container>
  )
}

const ActionPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0 10px 0;
`

const Container = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
`

const Content = styled.div`
  max-width: 1300px;
  width: 100%;
`
