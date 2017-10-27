import React, { Component } from 'react'
import { View, Text } from 'react-native'

class AlbumList extends Component {
  // Lifecycle hooks
  componentWillMount() {
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then((json) => {
        console.log('------------------------------------');
        console.log(json);
        console.log('------------------------------------');
      })
  }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    )
  }
}

export default AlbumList