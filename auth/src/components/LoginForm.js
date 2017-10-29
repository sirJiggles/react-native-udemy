import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { Card, Button, CardSection } from './common'

export default class LoginForm extends Component {
  state = {
    text: ''
  }

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            style={styles.formInput}
            placeholder='Jhon Smith'
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })}
          />
        </CardSection>
        <CardSection>

        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  formInput: {
    width: '100%',
    height: 30
  }
})