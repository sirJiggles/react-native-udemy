import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/common'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText='React native rocks!'/>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
