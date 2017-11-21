// all of the action creators in the project!
// an action create is a js func that cerated the actions

export const selectLibrary = (libraryId) => {
  // this is the action, it is wrapped by the parent func ... the action creator
  return {
    type: 'select_library',
    payload: libraryId
  }
}