import React, { Component } from 'react'
import firebase from 'firebase'
import { View } from 'react-native';
import { Header } from './src/components/common'
import LoginForm from './src/components/LoginForm'

export default class App extends Component {
  componentWillMount() {
    // set up firebase using our config
    firebase.initializeApp({
      apiKey: 'AIzaSyB_nZFwssPk-Q5EjQPXJdHOd__bYHeLe7A',
      authDomain: 'reactnativeauth-77fad.firebaseapp.com',
      databaseURL: 'https://reactnativeauth-77fad.firebaseio.com',
      projectId: 'reactnativeauth-77fad',
      storageBucket: 'reactnativeauth-77fad.appspot.com',
      messagingSenderId: '999479817949'
    })
  }

  render() {
    return (
      <View>
        <Header headerText='React native rocks!'/>
        <LoginForm />
      </View>
    );
  }
}
