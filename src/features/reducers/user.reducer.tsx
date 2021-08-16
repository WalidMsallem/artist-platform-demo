/**
 * user reducer
 */

// import ActionTypes from '../constants/user.constants'
import { UserState } from '../types/user.types'
import produce from 'immer'

// The initial state of the reducer
export const initialState: UserState = {
  data: {
    userInfo: {},
  },
  local: {
    isAuthenticated: false,
    loading: {},
    errors: {},
  },
}

const userReducer = (
  state: UserState = initialState,
  // action: UserActions | any,
): UserState =>
  produce(state, (draft) => {
    // switch (action.type) {
    // }
  })

export default userReducer
