import React, { Component } from 'react'
import firebase from 'firebase'
import { View } from 'react-native';
import { Header, Button, Spinner } from './src/components/common'
import LoginForm from './src/components/LoginForm'

export default class App extends Component {
  state = {
    // not sure if logged in first?
    loggedIn: null
  }

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

    // singed in and out events call out function
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{height: 45}}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log out
            </Button>
          </View>)
      case false:
        return <LoginForm />
      default:
        return <Spinner size='large' />
    }
  }

  render() {
    return (
      <View>
        <Header headerText='React native rocks!'/>
        {this.renderContent()}
      </View>
    );
  }
}
