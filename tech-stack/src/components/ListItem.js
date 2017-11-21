import React, { Component } from 'react'
import { CardSection } from './common/CardSection'
import { StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
// * as actions, means import all of the things from the file
// so for example we do not export default from the actions index file
// which means actions now as all the consts that are exported ;)
import * as actions from '../actions'

class ListItem extends Component {
  render({ title } = this.props.library) {
    const { titleStyles } = styles

    return (
      <CardSection>
        <Text style={titleStyles}>
          {title}
        </Text>
      </CardSection>
    )
  }
}

const styles = StyleSheet.create({
  titleStyles: {
    fontSize: 18,
    paddingLeft: 15
  }
})

// as no map state to props we pass null for 1st arg,
// 2nd arg is the actions, it creates the actions from dum functions into something majical
// where, when called the action will be dispatched to the redux store
// annnnnd will pass all the actions to the component as props.
export default connect(null, actions)(ListItem)