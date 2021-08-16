/*
 * User Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 */

import { generateActionTypes } from '../../utils/generic-saga'

const root = 'app/Artists/'

const SEARCH_ARTISTS = generateActionTypes(root, 'SEARCH_ARTISTS')
const CREATE_ARTIST = generateActionTypes(root, 'CREATE_ARTIST')
const GET_ARTIST_BY_ID = generateActionTypes(root, 'GET_ARTIST_BY_ID')
const CREATE_ARTIST_REPORT = generateActionTypes(root, 'CREATE_ARTIST_REPORT')
const TOGGLE_ADD_ARTIST_DRAWER = `${root}TOGGLE_ADD_ARTIST_DRAWER`
const TOGGLE_ARTIST_INFO_MODAL = `${root}TOGGLE_ARTIST_INFO_MODAL`

const constants = {
  SEARCH_ARTISTS,
  CREATE_ARTIST,
  TOGGLE_ADD_ARTIST_DRAWER,
  TOGGLE_ARTIST_INFO_MODAL,
  GET_ARTIST_BY_ID,
  CREATE_ARTIST_REPORT,
}
export default constants
