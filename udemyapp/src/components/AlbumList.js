import React, { Component } from 'react'
import { View, Text } from 'react-native'

class AlbumList extends Component {
  // initial sate for the component
  state = {
    albums: []
  }

  // Lifecycle hooks
  componentWillMount() {
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then((json) => {
        // tell the state to update with our albulm list
        this.setState({
          albums: json
        })
      })
  }

  renderAlbulms() {
    return this.state.albums.map(album => <Text>{album.title}</Text>)
  }

  render() {
    return (
      <View>
        {this.renderAlbulms()}
      </View>
    )
  }
}

export default AlbumList