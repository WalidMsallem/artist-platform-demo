import { action } from 'typesafe-actions'
import ActionTypes from '../constants/artists.constants'
import {
  searchArtistsPayload,
  createArtistsPayload,
  createArtistReportPayload,
} from '../types/artists.types'

export const searchArtists = ({ search }: searchArtistsPayload) =>
  action(ActionTypes.SEARCH_ARTISTS.request, {
    search,
  })

export const createArtist = (body: createArtistsPayload) =>
  action(ActionTypes.CREATE_ARTIST.request, {
    body,
  })

export const getArtistById = (id: string) =>
  action(ActionTypes.GET_ARTIST_BY_ID.request, {
    id,
  })

export const toggleDrawer = (value: boolean) =>
  action(ActionTypes.TOGGLE_ADD_ARTIST_DRAWER, value)

export const toggleModal = (value: boolean) =>
  action(ActionTypes.TOGGLE_ARTIST_INFO_MODAL, value)

export const createArtistReport = ({
  artistId,
  report,
}: createArtistReportPayload) =>
  action(ActionTypes.CREATE_ARTIST_REPORT.request, {
    artistId,
    report,
  })
