import ActionNames from '../enums/actions'

const initialState = {
  name: '',
  phone: '',
  shift: ''
}

export default (state = initialState, action: {type: String, payload: {prop: String, value: String}}) => {
  switch (action.type) {
    case ActionNames.employeeUpdate:
      // action.payload looks like {prop: 'name', value: 'gareth'}
      return {
        ...state,
        // this is key interpolation! very cool
        [action.payload.prop]: action.payload.value
      }
      // the above ES6 stops us having to do something like this
      // thing[action.payload.prop] = action.payload.value
      // return {
      //   ...state,
      //   ...thing
      // }
    default:
      return state
  }
}