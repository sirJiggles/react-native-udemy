import React from 'react'
import PropTypes from 'prop-types'
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
  album: PropTypes.shape({
    title: PropTypes.string
  })
}

export default AlbumDetail