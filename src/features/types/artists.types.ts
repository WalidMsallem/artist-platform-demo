import { ActionType } from 'typesafe-actions'
import * as actions from '../actions/artists.actions'

/* --- STATE --- */
interface Data {
  artistsList: []
  artist: object
}

interface Local {
  loading: {
    searchArtists: boolean
    creatingArtist: boolean
    gettingArtist: boolean
    creatingArtistReport: boolean
  }
  errors: {
    searchArtists: string
    creatingArtist: {}
    gettingArtist: string
    creatingArtistReport: {}
  }
  drawerAddArtist: boolean
  artistInfoModal: boolean
  modeCreateReport: boolean
}
interface ArtistStateInter {
  data: Data
  local: Local
}

/* --- ACTIONS --- */
type artistssActions = ActionType<typeof actions>

/* --- EXPORTS --- */

export type Range = {
  toTimestamp?: number
  fromTimestamp?: number
  to?: number
  from?: number
}
export type searchArtistsPayload = {
  search: string
}
export type getArtistByIdPayload = {
  id: string
}
export type createArtistReportPayload = {
  artistId: string
  report: object
}
export type createArtistsPayload = {
  instagram_url: string
  name: string
  own_review: string
  soundcloud_url: string
  comma_separated_tags: []
  twitter_url: string
  youtube_url: string
}
export type ArtistState = ArtistStateInter
export type ArtistssActions = artistssActions
