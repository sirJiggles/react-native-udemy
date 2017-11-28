import React, { Component } from 'react'
import { Card, CardSection, InputArea, Button } from './common'

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <InputArea
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

export default LoginForm