import React from 'react'
import NavBar from '../../components/Navbar'
import PatientDetails from './PatientDetails'

export default function() {
  return (
    <>
      <NavBar />
      <PatientDetails />
      {/* <h1>
            <FormattedMessage {...messages.header} />
          </h1> */}
    </>
  )
}
