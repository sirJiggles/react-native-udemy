import React, { Component } from 'react'
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
    password: auth.password
  }
}

export default connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginUser
  })(LoginForm)