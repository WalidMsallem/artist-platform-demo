/**
 * Artist reducer
 */
import ActionTypes from '../constants/artists.constants'
import { ArtistState, ArtistssActions } from '../types/artists.types'
import produce from 'immer'
import { message } from 'antd'

// The initial state of the reducer
export const initialState: ArtistState = {
  data: {
    artistsList: [],
    artist: {},
  },
  local: {
    loading: {
      searchArtists: false,
      creatingArtist: false,
      creatingArtistReport: false,
      gettingArtist: false,
    },
    errors: {
      searchArtists: '',
      creatingArtist: {},
      gettingArtist: '',
      creatingArtistReport: {},
    },
    drawerAddArtist: false,
    artistInfoModal: false,
    modeCreateReport: true,
  },
}

const userReducer = (
  state: ArtistState = initialState,
  action: ArtistssActions | any,
): ArtistState =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.TOGGLE_ADD_ARTIST_DRAWER:
        draft.local.drawerAddArtist = action.payload
        break
      case ActionTypes.TOGGLE_ARTIST_INFO_MODAL:
        draft.local.artistInfoModal = action.payload
        if (action.payload === false) {
          draft.data.artist = {}
        }
        draft.local.modeCreateReport = true
        break
      // create artist report
      case ActionTypes.CREATE_ARTIST_REPORT.request:
        draft.local.loading.creatingArtist = true
        draft.local.errors.creatingArtist = ''
        break
      case ActionTypes.CREATE_ARTIST_REPORT.success:
        draft.local.loading.creatingArtist = false
        draft.local.errors.creatingArtist = ''
        break
      case ActionTypes.CREATE_ARTIST_REPORT.failure:
        draft.local.loading.creatingArtist = false
        try {
          draft.local.errors.creatingArtist = action.errors.response.data
        } catch (e) {
          draft.local.errors.creatingArtist = 'Server error'
        }
        break

      // get artist by id
      case ActionTypes.GET_ARTIST_BY_ID.request:
        draft.local.loading.gettingArtist = true
        draft.local.errors.gettingArtist = ''
        break
      case ActionTypes.GET_ARTIST_BY_ID.success:
        draft.local.loading.gettingArtist = false
        draft.local.errors.gettingArtist = ''
        draft.data.artist = action.data.result
        break
      case ActionTypes.GET_ARTIST_BY_ID.failure:
        draft.local.loading.gettingArtist = false
        try {
          draft.local.errors.gettingArtist = action.errors.response.data
        } catch (e) {
          draft.local.errors.gettingArtist = 'Server error'
        }
        break

      // search artists
      case ActionTypes.SEARCH_ARTISTS.request:
        draft.local.loading.searchArtists = true
        draft.local.errors.searchArtists = ''
        break
      case ActionTypes.SEARCH_ARTISTS.success:
        draft.local.loading.searchArtists = false
        draft.local.errors.searchArtists = ''
        draft.data.artistsList = action.data.result
        break
      case ActionTypes.SEARCH_ARTISTS.failure:
        draft.local.loading.searchArtists = false
        try {
          draft.local.errors.searchArtists = action.errors.response.data
        } catch (e) {
          draft.local.errors.searchArtists = 'Server error'
        }
        break
      // create artist
      case ActionTypes.CREATE_ARTIST.request:
        draft.local.loading.creatingArtist = true
        draft.local.errors.creatingArtist = {}
        break
      case ActionTypes.CREATE_ARTIST.success:
        draft.local.loading.creatingArtist = false
        draft.local.errors.creatingArtist = {}
        draft.local.drawerAddArtist = false
        message.success('Artist created with success', 5)
        break
      case ActionTypes.CREATE_ARTIST.failure:
        draft.local.loading.creatingArtist = false

        try {
          draft.local.errors.creatingArtist = action.objectErrors
        } catch (e) {
          draft.local.errors.creatingArtist = {
            server_error: { message: 'Server error' },
          }
        }
        break
    }
  })

export default userReducer
