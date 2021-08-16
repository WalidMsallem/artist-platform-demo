/**
 * Artists Sagas
 */

import { takeEvery, put, call } from 'redux-saga/effects'
import { ArtistssActions } from '../types/artists.types'
import * as api from '../services/artists.services'
import ActionTypes from '../constants/artists.constants'

export function* searchArtists(action: ArtistssActions | any) {
  try {
    if (action.payload.search) {
      const searchArtistsResponse = yield call(
        api.searchArtists,
        action.payload,
      )

      yield put({
        type: ActionTypes.SEARCH_ARTISTS.success,
        data: searchArtistsResponse,
      })
    } else {
      yield put({
        type: ActionTypes.SEARCH_ARTISTS.success,
        data: { result: [] },
      })
    }
  } catch (e) {
    // console.log('e', e)
    yield put({ type: ActionTypes.SEARCH_ARTISTS.failure, e })
  }
}

export function* searchArtistsWatcher() {
  yield takeEvery(ActionTypes.SEARCH_ARTISTS.request, searchArtists)
}

export function* createArtist(action: ArtistssActions | any) {
  try {
    const createArtistResponse = yield call(
      api.createArtist,
      action.payload.body,
    )
    yield put({
      type: ActionTypes.CREATE_ARTIST.success,
      data: createArtistResponse,
    })
  } catch (e) {
    yield put({ type: ActionTypes.CREATE_ARTIST.failure, e })
  }
}

export function* createArtistWatcher() {
  yield takeEvery(ActionTypes.CREATE_ARTIST.request, createArtist)
}

export function* getArtistById(action: ArtistssActions | any) {
  try {
    const getArtistByIdResponse = yield call(api.getArtistById, action.payload)
    yield put({
      type: ActionTypes.GET_ARTIST_BY_ID.success,
      data: getArtistByIdResponse,
    })
  } catch (e) {
    yield put({ type: ActionTypes.GET_ARTIST_BY_ID.failure, e })
  }
}

export function* getArtistByIdWatcher() {
  yield takeEvery(ActionTypes.GET_ARTIST_BY_ID.request, getArtistById)
}

export function* createArtistReport(action: ArtistssActions | any) {
  try {
    const getArtistByIdResponse = yield call(api.createArtistReport, action.payload)
    yield put({
      type: ActionTypes.CREATE_ARTIST_REPORT.success,
      data: getArtistByIdResponse,
    })
  } catch (e) {
    yield put({ type: ActionTypes.CREATE_ARTIST_REPORT.failure, e })
  }
}

export function* createArtistReportWatcher() {
  yield takeEvery(ActionTypes.CREATE_ARTIST_REPORT.request, createArtistReport)
}
