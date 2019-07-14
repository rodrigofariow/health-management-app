import { createReducer, createAction } from 'redux-starter-kit'

function createComponentReducer(reducerObject) {
  return createReducer(undefined, reducerObject)
}

export { createAction, createComponentReducer, createReducer }
