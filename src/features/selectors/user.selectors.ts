/**
 * User selectors
 */

import { createSelector } from 'reselect'

export const selectisAuthenticated = createSelector(
  (state: any): object => state.user,
  (user: any): string => user.local.isAuthenticated,
)

export const selectisUserInfo = createSelector(
  (state: any): object => state.user,
  (user: any): string => user.data.userInfo,
)
 