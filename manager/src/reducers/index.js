import { combineReducers } from 'redux'
import Auth from './Auth'

export default combineReducers({
  // auth state is made by Auth reducer
  auth: Auth
})