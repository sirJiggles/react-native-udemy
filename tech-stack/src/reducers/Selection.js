
// a reducer cannot return undefined, but can be null for first boot
// as we do not know what row will be selected, set initial to null when no state
export default (state = null, action) => {
  // work out what action is coming through here
  switch(action.type) {
    case 'select_library':
      // this then sets the state to be the lib id which is passed
      return action.payload
    default:
      return state
  }
}