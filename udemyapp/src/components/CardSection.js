import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

// as will just present info we use a functional component here
const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}
// Prop validaltion
CardSection.propTypes = {
  // array of objects aka JSX tags
  children: PropTypes.array
}

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
})

export default CardSection
