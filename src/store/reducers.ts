import { HYDRATE } from 'next-redux-wrapper'
import { AnyAction, combineReducers } from 'redux'

import system from './system/reducer'
import ui from './ui/reducer'

const combinedReducer = combineReducers({
  ui,
  system,
})

export type State = ReturnType<typeof combinedReducer>

export default function rootReducer(state: State, action: AnyAction) {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }

    // preserve any client state here:
    // if (state.count.count) nextState.count.count = state.count.count // preserve count value on client side navigation

    return nextState
  }
  return combinedReducer(state, action)
}
