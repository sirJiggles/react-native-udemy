import React from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet, View } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'

const Header = (props) => {
  const { textStyle, viewStyle } = styles

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
}

Header.propTypes = {
  headerText: PropTypes.string
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    ...ifIphoneX({
        paddingTop: 40,
        height: 100
    }, {
        paddingTop: 20,
        height: 60
    }),
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
})

export { Header }