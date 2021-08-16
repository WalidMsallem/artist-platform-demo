// import { ActionType } from 'typesafe-actions'
// import * as actions from '../actions/user.actions'

/* --- STATE --- */

interface Data {
  userInfo: object
}
interface Local {
  isAuthenticated: boolean
  loading: {}
  errors: {}
}
interface UserStateInter {
  data: Data
  local: Local
}

/* --- ACTIONS --- */
// type userActions = ActionType<typeof actions>

/* --- EXPORTS --- */

export type UserState = UserStateInter
// export type UserActions = userActions
