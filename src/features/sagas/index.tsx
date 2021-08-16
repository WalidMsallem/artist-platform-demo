/**
 * Combine  Sagas  watcher
 */

import { all } from 'redux-saga/effects'

import {
  searchArtistsWatcher,
  createArtistWatcher,
  getArtistByIdWatcher,
  createArtistReportWatcher,
} from './artists.saga'

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    searchArtistsWatcher(),
    createArtistWatcher(),
    getArtistByIdWatcher(),
    createArtistReportWatcher(),
  ])
}
