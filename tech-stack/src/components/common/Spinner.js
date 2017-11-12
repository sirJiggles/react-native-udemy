import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerWrapper}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  )
}

Spinner.propTypes = {
  size: PropTypes.string
}

const styles = StyleSheet.create({
  spinnerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export { Spinner }