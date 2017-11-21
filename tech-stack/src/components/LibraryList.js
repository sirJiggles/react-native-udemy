import React, { Component } from 'react'
import { connect } from 'react-redux'

class LibraryList extends Component {
  render() {

    // at this state this.props contains libraries!! because of the maping function... yay!

    return;
  }
}

// this func is to just take global state object and
// map it in some fashion, and provide them as props
// to the component. state in this case is the state of the app
// as in the redux store, when this is executed we get the first run of the reducers
// or at least the library reducer.
// once we have access to this sate object we need to then communicate it to the componen
// what i return here will be props for the lib list
const mapStateToProps = (state) => {
  // This is the props!
  return {
    libraries: state.libraries
  }
}

export default connect(mapStateToProps)(LibraryList)