import React, { useEffect } from 'react'
import NavBar from '../../components/Navbar'
import PatientDetails from './PatientDetails'

export default function() {
  useEffect(() => {
    fetch('/example_api')
      .then(res => res.json())
      .then(res => console.log(res))
  }, [])
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
