import React from 'react'
import { arrayOf, func, shape, string } from 'prop-types'
import PatientFocus from '../PatientFocus'

function FocusList({ focuses = [], handleDeleteButtonClick }) {
  return focuses.map(focus => (
    <PatientFocus
      key={focus.id}
      focus={focus}
      handleDeleteButtonClick={handleDeleteButtonClick}
    />
  ))
}

FocusList.propTypes = {
  focuses: arrayOf(
    shape({
      relevantData: string.isRequired,
      diagnosis: string.isRequired,
      interventions: string.isRequired,
    }),
  ),
  handleDeleteButtonClick: func.isRequired,
}

export default React.memo(FocusList)
