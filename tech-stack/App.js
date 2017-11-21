import { Provider } from 'react-redux'
import { createStore } from 'redux'
import React from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'
import reducers from './src/reducers'
import { Header } from './src/components/common'
import LibraryList from './src/components/LibraryList'


const App = () => {

  const { fill } = style

  return (
    <Provider store={createStore(reducers)}>
      <View style={fill}>
        <Header headerText="Gareth rocks!"/>
        <View style={fill}>
          <LibraryList />
        </View>
      </View>
    </Provider>
  )
}

const style = StyleSheet.create({
  fill: {
    flex: 1
  }
})

export default App

AppRegistry.registerComponent('tech_stack', App)