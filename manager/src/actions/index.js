import ActionNames from '../enums/actionNames'

export const emailChanged = (text: String) => {
  // return our action
  return {
    type: ActionNames.emailChanged,
    payload: text
  }
}