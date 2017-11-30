import ActionNames from '../enums/actions'

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null
}

// default is null for state as we can NEVER have undefined for state
export default (state = INITIAL_STATE, action: {type: String, payload: any}) => {
  switch (action.type) {
    case ActionNames.emailChanged:
      // make a new object do not modify!
      // use spread operator to copy over existing state
      // then override or create the email key in the new state obj
      return {
        ...state, email: action.payload
      }
    case ActionNames.passwordChanged:
      return {
        ...state, password: action.payload
      }
    case ActionNames.loginUserSuccess:
      return {
        ...state, user: action.payload
      }
    case ActionNames.loginUserFailed:
      return {

      }
    default:
      return state
  }
}