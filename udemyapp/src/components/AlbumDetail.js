import React from 'react'
import AlbumInterface from '../interfaces/Album'
import { Text, View, Image, StyleSheet } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = ( { album }) => {
  const { title, artist, thumbnail_image } = album

  return (
    <Card>
      <CardSection>
        <View>
          {/* Images need a height and width! */}
          <Image source={{ uri: thumbnail_image}} style={styles.thumbail} />
        </View>
        <View style={styles.headerTextWrapper}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  )
}

// Prop validaltion
AlbumDetail.propTypes = {
  album: AlbumInterface
}

const styles = StyleSheet.create({
  headerTextWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbail: {
    width: 50,
    height: 50
  }
})

export default AlbumDetail