import ActionNames from '../enums/actions'

const INITIAL_STATE = {
  email: ''
}

// default is null for state as we can NEVER have undefined for state
export default (state = null, action: {type: String, payload: any}) => {
  switch (action.type) {
    case ActionNames.emailChanged:

      return state
    default:
      return state
  }
}