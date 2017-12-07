import ActionNames from '../enums/actions'

const initialState = {}

export default (state: initialState, action: String) => {
  switch (action) {
    case ActionNames.employeeUpdate:
      return {
        ...state
      }
    default:
      return state
  }
}