import ActionNames from '../enums/actions'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

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


// helper func for the login user action
const loginUserSuccess = (dispatch: Function, user: {email: String, password: String}) => {
  // NOW we will manually dispatch the action, yipie
  dispatch({
    type: ActionNames.loginUserSuccess,
    payload: user
  })

  // Actions comes from react navigation lib. the func is the keyName on the Scene
  // this is like Embers transition to ... but better
  // gives us a nice back button. doesn't make sense here but is super duper helpful
  Actions.employeeList()
}

// helper func for the failed case
const loginUserFailed = (dispatch: Function, err: String) => {
  dispatch({
    type: ActionNames.loginUserFailed,
    payload: err
  })
}

export const loginUser = ({email, password}: {email: String, password: String}) => {
  // the dispatch here is redux thunk
  // basically we now return a func form the action creator
  // reduc thunk fires, calls the func right away, do the login right away
  // then we wait, wait, wait and when we are in the then. we will MANUALY
  // dispatch the action. this is noted in the body of the then below
  return (dispatch) => {
    // am about to log in the user
    dispatch({
      type: ActionNames.loginUser
    })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        // user must need a new account :D
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch((err) => loginUserFailed(dispatch, err.message))
      })
  }
}