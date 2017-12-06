// one location where we can define all routes
import React from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
import LoginFrom from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='main' hideNavBar>
        <Scene key='auth'>
          <Scene
            key='login'
            component={LoginFrom}
            title='Please Login'
            initial
          />
        </Scene>
        <Scene key='main'>
          <Scene
            key='employeeList'
            component={EmployeeList}
            title='Employees'
          />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent