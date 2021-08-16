/**
 * Artists selectors
 */

import { createSelector } from 'reselect'

export const selectSearchResult = createSelector(
  (state: any): object => state.artists,
  (artists: any): [] => artists.data.artistsList,
)
export const selectArtist = createSelector(
  (state: any): object => state.artists,
  (artists: any): [] => artists.data.artist,
)
export const selectLocal = createSelector(
  (state: any): object => state.artists,
  (artists: any): object => artists.local,
)

 