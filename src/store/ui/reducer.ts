import { UiActionTypes } from './action'
import { TOGGLE_DRAWER } from './type'

export interface UiState {
  openDrawer: string
}

const initialState: UiState = {
  openDrawer: null,
}

export default function reducer(state = initialState, action: UiActionTypes) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        openDrawer: action.key === state.openDrawer ? null : action.key,
      }
    default:
      return state
  }
}
