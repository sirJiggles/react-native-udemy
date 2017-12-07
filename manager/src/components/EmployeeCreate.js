import React, { Component } from 'react'
import { Card, CardSection, InputArea, Button } from './common'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <InputArea
            label='name'
            placeholder='jane'
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({prop:'name', value})}
          />
        </CardSection>

        <CardSection>
          <InputArea
            label='phone'
            placeholder='55-555-555'
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({prop:'phone', value})}
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

const mapStatesToProps = (state) => {
  const { name, phone, shift } = state.employeeForm

  return { name, phone, shift }
}

export default connect(mapStatesToProps, { employeeUpdate })(EmployeeCreate)