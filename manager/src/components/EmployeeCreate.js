import React, { Component } from 'react'
import { Picker, StyleSheet } from 'react-native'
import { Card, CardSection, InputArea, Button } from './common'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'

class EmployeeCreate extends Component {

  // helper for our picker
  daysOfWeek() {
    return [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ]
  }

  render() {
    return (
      <Card>
        <CardSection>
          <InputArea
            label='name'
            placeholder='jane'
            value={ this.props.name }
            onChangeText={ value => this.props.employeeUpdate({prop:'name', value}) }
          />
        </CardSection>

        <CardSection>
          <InputArea
            label='phone'
            placeholder='55-555-555'
            value={ this.props.phone }
            onChangeText={ value => this.props.employeeUpdate({prop:'phone', value}) }
          />
        </CardSection>

        <CardSection>
          <Picker
            style={ styles.picker }
            selectedValue={ this.props.shift }
            onValueChange={ value => this.props.employeeUpdate({prop: 'shift', value}) }
          >
            { this.daysOfWeek().map(day => <Picker.Item key={day} label={day} value={day} />) }
          </Picker>
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

const styles = StyleSheet.create({
  picker: {
    flex: 1
  }
})

export default connect(mapStatesToProps, { employeeUpdate })(EmployeeCreate)