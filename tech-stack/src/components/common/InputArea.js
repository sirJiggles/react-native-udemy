import React from 'react'
import PropTypes from 'prop-types'
import { TextInput, View, Text, StyleSheet } from 'react-native'

const InputArea = ({ label, value, onChangeText, placeholder, secure }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>
        {label}
      </Text>
      <TextInput
        secureTextEntry={secure}
        placeholder={placeholder}
        autoCorrect={false}
        style={styles.formInput}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

// Prop Validation
InputArea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  secure: PropTypes.bool
}

export { InputArea }


const styles = StyleSheet.create({
  formInput: {
    height: 30,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft:  20,
    flex: 1
  },
  container: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})