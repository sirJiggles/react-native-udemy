import React from 'react'
import AlbumInterface from '../interfaces/Album'
import { Text } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  )
}

// Prop validaltion
AlbumDetail.propTypes = {
  album: AlbumInterface
}

export default AlbumDetail