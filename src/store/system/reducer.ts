import { SystemActionTypes } from './action'
import { SET_CHECKOUT_ID, SET_CUSTOMER_ACCESS_TOKEN } from './type'

export interface SystemState {
  checkoutId: string
  customerAccessToken: string
}

const initialState: SystemState = {
  checkoutId: null,
  customerAccessToken: null,
}

export default function reducer(
  state = initialState,
  action: SystemActionTypes,
) {
  switch (action.type) {
    case SET_CHECKOUT_ID:
      return { ...state, checkoutId: action.id }
    case SET_CUSTOMER_ACCESS_TOKEN:
      return { ...state, customerAccessToken: action.token }
    default:
      return state
  }
}
