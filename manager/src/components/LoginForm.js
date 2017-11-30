import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, InputArea, Button } from './common'

class LoginForm extends Component {

  onEmailChange(text: String) {
    // the func comes from the connect helper and action creator
    this.props.emailChanged(text)
  }

  onPasswordChange(text: String) {
    // run the action creator
    this.props.passwordChanged(text)
  }

  login() {
    const { email, password } = this.props

    this.props.loginUser({email, password})
  }

  renderError() {
    const { error } = this.props
    if (error) {
      return (
        <View style={styles.error}>
          <Text style={styles.errorText}>
            {error}
          </Text>
        </View>
      )
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <InputArea
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
            label="Email"
            placeholder="email@gmail.com"
          />
        </CardSection>
        <CardSection>
          <InputArea
            secure
            value={this.props.password}
            label="Password"
            placeholder="Password"
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>

        { this.renderError() }

        <CardSection>
          <Button onPress={this.login.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  // we only care about email in this form right now
  const { auth } = state
  return {
    email: auth.email,
    password: auth.password,
    error: auth.error
  }
}

const styles = StyleSheet.create({
  error: {
    backgroundColor: 'white'
  },
  errorText: {
    color: 'red',
    fontSize: 20,
    padding: 10,
    alignSelf: 'center'
  }
})

export default connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginUser,
  })(LoginForm)