import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { AppRegistry, View } from 'react-native'
import reducers from './src/reducers'
import firebase from 'firebase'
import LoginForm from './src/components/LoginForm'
import { Header } from './src/components/common'
import ReduxThunk from 'redux-thunk'

class App extends Component {

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAeuUtt4K32fP7wGVcZCLMQrWGAD9RndNc',
      authDomain: 'manager-b6e21.firebaseapp.com',
      databaseURL: 'https://manager-b6e21.firebaseio.com',
      projectId: 'manager-b6e21',
      storageBucket: '',
      messagingSenderId: '683941434806'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      // Apply middleware is how we hook up reduc thunk
      // 2nd arg is for any intial state we want to send to redux
      // mainly this is for server side rendering ;)
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View>
          <Header headerText="Gareth Rocks" />
          <LoginForm />
        </View>
      </Provider>
    )
  }
}

export default App

AppRegistry.registerComponent('manager', () => App)