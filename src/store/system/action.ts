import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { SET_CHECKOUT_ID, SET_CUSTOMER_ACCESS_TOKEN } from './type'

interface SetCheckoutIdAction {
  type: typeof SET_CHECKOUT_ID
  id: string
}

interface SetCustomerAccessTokenAction {
  type: typeof SET_CUSTOMER_ACCESS_TOKEN
  token: string
}

export const setCheckoutId = (
  id: string,
): ThunkAction<void, null, unknown, Action<string>> => dispatch =>
  dispatch({ type: SET_CHECKOUT_ID, id })

export const setCustomerAccessToken = (token: string) => (dispatch: Function) =>
  dispatch({ type: SET_CUSTOMER_ACCESS_TOKEN, token })

export type SystemActionTypes =
  | SetCheckoutIdAction
  | SetCustomerAccessTokenAction
