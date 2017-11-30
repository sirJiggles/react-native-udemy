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
  // the dispatch here is redux thunk
  // basically we now return a func form the action creator
  // reduc thunk fires, calls the func right away, do the login right away
  // then we wait, wait, wait and when we are in the then. we will MANUALY
  // dispatch the action. this is noted in the body of the then below
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
      // NOW we will manually dispatch the action, yipie
      dispatch(
        {
          type: ActionNames.loginUserSuccess,
          payload: user
        }
      )
    }).catch((err) => {
      console.log(err);
    })
  }
}