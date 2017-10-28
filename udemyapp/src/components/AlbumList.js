import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  // initial sate for the component
  state = {
    albums: []
  }

  // Lifecycle hooks
  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then((json) => {
        // tell the state to update with our albulm list
        this.setState({
          albums: json
        })
      })
  }

  renderAlbulms() {
    // pass the album via props to the albulm details
    return this.state.albums.map(album =>
      <AlbumDetail album={album} key={album.title} />
    )
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbulms()}
      </ScrollView>
    )
  }
}

export default AlbumList