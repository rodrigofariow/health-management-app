import React from 'react'
import { Focus } from './shared/types'
import PatientFocus from './PatientFocus'

type Props = {
  focuses: Focus[]
  handleDeleteButtonClick: React.ComponentProps<
    typeof PatientFocus
  >['handleDeleteButtonClick']
}

function FocusList({ focuses = [], handleDeleteButtonClick }: Props) {
  return (
    <>
      {focuses.map(focus => (
        <PatientFocus
          key={focus.id}
          focus={focus}
          handleDeleteButtonClick={handleDeleteButtonClick}
        />
      ))}
    </>
  )
}

export default React.memo(FocusList)
