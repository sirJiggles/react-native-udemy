import React, { Component } from 'react'
import { Card, CardSection, InputArea, Button } from './common'

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <InputArea
            label='name'
            placeholder='jane'
          />
        </CardSection>

        <CardSection>
          <InputArea
            label='phone'
            placeholder='55-555-555'
          />
        </CardSection>

        <CardSection>

        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default EmployeeCreate