import { Provider } from 'react-redux'
import { createStore } from 'redux'
import React from 'react'
import { AppRegistry, View, Text } from 'react-native'
import reducers from './src/reducers'


const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Text>Hello Redux</Text>
      </View>
    </Provider>
  )
}

export default App

AppRegistry.registerComponent('tech_stack', App)