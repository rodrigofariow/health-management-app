/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import loadable from '../../utils/loadable'

const HomePage = loadable(() => import('../Main'))

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
