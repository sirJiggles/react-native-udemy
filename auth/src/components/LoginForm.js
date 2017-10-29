import React, { Component } from 'react'
import { Card, Button, CardSection, InputArea } from './common'

export default class LoginForm extends Component {
  state = {
    text: ''
  }

  render() {
    return (
      <Card>
        <CardSection>
          <InputArea
            label='something'
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </CardSection>
        <CardSection></CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    )
  }
}