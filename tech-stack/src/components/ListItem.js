import React, { Component } from 'react'
import { CardSection } from './common/CardSection'
import { StyleSheet, Text } from 'react-native'

class ListItem extends Component {
  render() {
    const { title } = styles

    return (
      <CardSection>
        <Text style={title}>
          {this.props.library.title}
        </Text>
      </CardSection>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
})

export default ListItem