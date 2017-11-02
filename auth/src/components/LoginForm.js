import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Card, Button, CardSection, InputArea, Spinner } from './common'
import firebase from 'firebase'

export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onButtonPress() {
    // log the user in!
    const {email, password} = this.state

    // clear the err, set that we are loading (can set multiple things in one call)
    this.setState({error: '', loading: true})

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        // try to make account, if not there
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
        // could not make account
          .catch((err) => this.onLoginFail.call(this, err))
      })
  }

  onLoginFail(err) {
    this.setState({ error: err.message, loading: false })
  }

  onLoginSuccess() {
    // reset the state
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }

  // Helper method that can return JSX, this is very nice as really they are just functions! :D
  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    )
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
          {this.renderButton()}
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