import React from 'react'
import AlbumInterface from '../interfaces/Album'
import { Text } from 'react-native'
import Card from './Card'

const AlbumDetail = (props) => {
  return (
    <Card>
      <Text>{props.album.title}</Text>
    </Card>
  )
}

// Prop validaltion
AlbumDetail.propTypes = {
  album: AlbumInterface
}

export default AlbumDetail