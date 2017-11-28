import React, { Component } from 'react'
import { CardSection } from './common'
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
// * as actions, means import all of the things from the file
// so for example we do not export default from the actions index file
// which means actions now as all the consts that are exported ;)
import * as actions from '../actions'

class ListItem extends Component {

  // this is also how you create your own animation
  slideTransition = {
    duration: 200,
    // you can ommit create and update if not needed, just was playing
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity
    },
    delete: {
      type: LayoutAnimation.Types.opacity,
      property: LayoutAnimation.Properties.scaleXY
    }
  }

  componentWillUpdate() {
    // if we call this any time before the update takes place, like when we update the props
    // LayoutAnimation.linear()
    LayoutAnimation.configureNext(this.slideTransition)
  }

  // helper func for the description
  renderDescr() {
    const { library, expanded } = this.props

    if (expanded) {
      return (
        <CardSection>
          <Text>{library.description}</Text>
        </CardSection>
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