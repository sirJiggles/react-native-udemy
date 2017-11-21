import React, { Component } from 'react'
import { CardSection } from './common/CardSection'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
// * as actions, means import all of the things from the file
// so for example we do not export default from the actions index file
// which means actions now as all the consts that are exported ;)
import * as actions from '../actions'

class ListItem extends Component {

  // helper func for the description
  renderDescr() {
    const { library, expanded } = this.props

    if (expanded) {
      return (
        <Text>{library.description}</Text>
      )
    }
  }

  render() {
    const { titleStyles } = styles
    const { library, selectLibrary } = this.props

    return (
      <TouchableWithoutFeedback
        onPress={() => selectLibrary(library.id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyles}>
              {library.title}
            </Text>
          </CardSection>
          {this.renderDescr()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  titleStyles: {
    fontSize: 18,
    paddingLeft: 15
  }
})

// own props is the porps passed ot the component
const mapStateToProps = (state, ownProps) => {
  // doing logic / pre calculation here rather than in the component, we
  // can do things that might make the component more dirty like doing conditional checks on props
  const expanded = state.selectedLibId === ownProps.library.id

  // as key and value the same no need for prop, is same as {expanded: expanded}
  return { expanded }
}

// as no map state to props we pass null for 1st arg,
// 2nd arg is the actions, it creates the actions from dum functions into something majical
// where, when called the action will be dispatched to the redux store
// annnnnd will pass all the actions to the component as props.
export default connect(mapStateToProps, actions)(ListItem)