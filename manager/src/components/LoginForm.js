import React, { Component } from 'react'
import { connect } from 'react-redux'
import { emailChanged } from '../actions'
import { Card, CardSection, InputArea, Button } from './common'

class LoginForm extends Component {
  onEmailChange(text: String) {
    // the func comes from the connect helper and action creator
    this.props.emailChanged(text)
  }

  render() {
    return (
      <Card>
        <CardSection>
          <InputArea
            onChangeText={this.onEmailChange.bind(this)}
            label="Email"
            placeholder="email@gmail.com"
          />
        </CardSection>
        <CardSection>
          <InputArea
            secure
            label="Password"
            placeholder="Password"
          />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default connect(null, { emailChanged })(LoginForm)