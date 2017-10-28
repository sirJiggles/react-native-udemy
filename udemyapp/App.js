import React from 'react'
import { View } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

const App = () => {
  return (
    // This little fix gives the root view 100% height ...
    <View style={{flex:1}}>
      <Header headerText='Albums' />
      <AlbumList />
    </View>
  )
}

export default App