import React, { Component } from 'react'
import { Card, Button, CardSection, InputArea } from './common'

export default class LoginForm extends Component {
  state = {
    email: '',
    password: ''
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
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    )
  }
}