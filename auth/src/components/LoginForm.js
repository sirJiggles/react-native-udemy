import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Card, Button, CardSection, InputArea } from './common'
import firebase from 'firebase'

export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  onButtonPress() {
    // log the user in!
    const {email, password} = this.state

    // clear the err
    this.setState({error: ''})

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        // try to make account, if not there
        firebase.auth().createUserWithEmailAndPassword(email, password)
        // could not make account
          .catch((err) => {
            // show an error
            this.setState({ error: err.message })
          })
      })
  }

  render() {
    return (
      <Card>
        <CardSection>
          <InputArea
            label='Email'
            placeholder='email@example.com'
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
        </CardSection>
        <CardSection>
          <InputArea
            label='Password'
            placeholder=''
            secure={true}
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />
        </CardSection>
        <Text style={styles.error}>
          {this.state.error}
        </Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  error: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    paddingTop: 10,
    paddingBottom: 10
  }
})