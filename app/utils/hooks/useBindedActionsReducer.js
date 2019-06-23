import { useMemo, useReducer } from 'react'
/**
 *
 * @param {Function} reducer reducer function
 * @param {Object} reducerObject object that contains actions handlers
 * @param {*} initialState initial reducer state
 * @param {Function} init allows lazy initialization of state
 * @returns {[*, Object]} array with state and action creators handlers object
 * @example
 * const reducerObject = {
 *  increment: (state, { payload }) => state + payload,
 *  decrement: (state, { payload }) => state - payload
 * }
 *
 * const reducer = createReducer(undefined, reducerObject)
 *
 * function Component() {
 *  const [count, actions] = useBindedActionsReducer(reducer, reducerObject, 1)
 *
 *  //...Later
 *  function handleButtonClick() {
 *    actions.increment(2) // state will be updated to "3"
 *  }
 *
 *  return <button onClick={handleButtonClick} />
 * }
 */
export default function useBindedActionsReducer(
  reducer,
  reducerObject,
  initialState,
  init,
) {
  const [state, dispatch] = useReducer(reducer, initialState, init)

  const bindedActionCreators = useMemo(
    () =>
      Object.keys(reducerObject).reduce((acc, actionCreatorName) => {
        acc[actionCreatorName] = payload =>
          dispatch({ type: actionCreatorName, payload })
        return acc
      }, {}),
    [dispatch, reducerObject],
  )

  return [state, bindedActionCreators]
}
