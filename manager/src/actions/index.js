import ActionNames from '../enums/actions'
import firebase from 'firebase'

export const emailChanged = (text: String) => {
  // return our action
  return {
    type: ActionNames.emailChanged,
    payload: text
  }
}

export const passwordChanged = (text: String) => {
  return {
    type: ActionNames.passwordChanged,
    payload: text
  }
}

export const loginUser = ({email, password}: {email: String, password: String}) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
    console.log(user);
  }).catch((err) => {
    console.log(err);
  })
}