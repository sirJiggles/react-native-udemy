import React, { Component } from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'

class LibraryList extends Component {
  componentWillMount() {
    // create list view and tell it what to use
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    // take the list of libs and use this to reder a list to the screen
    this.dataSource = ds.cloneWithRows(this.props.libraries)
  }

  // arg is the element in the list trying to be rendered
  renderRow(library) {
    // return an instance of the list item, with the item passed
    return <ListItem library={library} />
  }

  render() {

    // at this state this.props contains libraries!! because of the maping function... yay!

    return(
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
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