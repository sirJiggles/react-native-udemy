import React from 'react'
import { View } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

// Our API end point for the albums: http://rallycoding.herokuapp.com/api/music_albums

const App = () => {
  return (
    <View>
      <Header headerText='Albums' />
      <AlbumList>


      </AlbumList>
    </View>
  )
}

export default App