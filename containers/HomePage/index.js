/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react'
import NavBar from '../../components/NavBar'
import PatientDetails from '../../components/PatientDetails'
// import { FormattedMessage } from 'react-intl'
// import messages from './messages'

export default function HomePage() {
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
