import React from 'react'
import { View, StyleSheet } from 'react-native'

// Shwing a card, looks nic and wraps another component
// this is normal for react native
// where we make a component for styling only
const Card = (props) => {
  return (
    <View style={styles.containerStyles}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyles: {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
})

export default Card