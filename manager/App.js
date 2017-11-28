import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { View, Text, AppRegistry } from 'react-native'
import reducers from './src/reducers'
import firebase from 'firebase'

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
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello Gareth</Text>
        </View>
      </Provider>
    )
  }
}

export default App

AppRegistry.registerComponent('manager', () => App)