import { DrawerActionType } from '../../lib/constants'
import { TOGGLE_DRAWER } from './type'

interface ToggleDrawerAction {
  type: typeof TOGGLE_DRAWER
  key: DrawerActionType
}

export const toggleDrawer = (key: DrawerActionType) => (dispatch: Function) =>
  dispatch({ type: TOGGLE_DRAWER, key })

export type UiActionTypes = ToggleDrawerAction
