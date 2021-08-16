import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import userReducer from './user.reducer'
import artistsReducer from './artists.reducer'
import history from '../../utils/history'

const createReducer = (injectedReducers = {}): object | any => {
  const rootReducer = combineReducers({
    user: userReducer,
    artists: artistsReducer,
    router: connectRouter(history),
    ...injectedReducers,
  })

  return rootReducer
}
export default createReducer
