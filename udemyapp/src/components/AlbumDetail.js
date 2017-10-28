import React from 'react'
import AlbumInterface from '../interfaces/Album'
import { Text, View, Image, StyleSheet, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ( { album }) => {
  const { title, artist, thumbnail_image, image, url } = album

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbailContainer}>
          {/* Images need a height and width! */}
          <Image source={{ uri: thumbnail_image}} style={styles.thumbail} />
        </View>
        <View style={styles.headerTextWrapper}>
          <Text style={styles.trackTitle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{uri: image}} style={styles.albulmCover} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}/>
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
  trackTitle: {
    fontSize: 18
  },
  thumbailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbail: {
    width: 50,
    height: 50
  },
  // a way of doing 100% image, BUT can also pass 100% as a string ..
  // teacher did not mention this :)
  albulmCover: {
    flex: 1,
    width: null,
    height: 300
  }
})

export default AlbumDetail