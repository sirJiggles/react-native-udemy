// one location where we can define all routes
import React from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
import LoginFrom from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

const RouterComponent = () => {
  return (
    <Router>
      <Stack key='root'>
        <Scene
          key='login'
          component={LoginFrom}
          title='Please Login'
          initial
        />
        <Scene
          key='employee-list'
          component={EmployeeList}
          title='Employees'
        />
      </Stack>
    </Router>
  )
}

export default RouterComponent