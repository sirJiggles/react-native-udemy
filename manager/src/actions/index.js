import ActionNames from '../enums/actions'

export const emailChanged = (text: String) => {
  // return our action
  return {
    type: ActionNames.emailChanged,
    payload: text
  }
}