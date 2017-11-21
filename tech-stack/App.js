import { Provider } from 'react-redux'
import { createStore } from 'redux'
import React from 'react'
import { AppRegistry, View, Text } from 'react-native'
import reducers from './src/reducers'
import { Header } from './src/components/common'
import LibraryList from './src/components/LibraryList'


const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="Gareth rocks!"/>
        <View>
          <LibraryList />
          <Text>Hello Redux</Text>
        </View>
      </View>
    </Provider>
  )
}

export default App

AppRegistry.registerComponent('tech_stack', App)