// one location where we can define all routes
import React from 'react'
import { Scene, Router, Stack, Actions } from 'react-native-router-flux'
import LoginFrom from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'

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
        <Stack key='main'>
          <Scene
            key='employeeList'
            component={EmployeeList}
            title='Employees'
            rightTitle='Add'
            onRight={() => Actions.employeeCreate()}
            initial
          />
          <Scene
            key='employeeCreate'
            component={EmployeeCreate}
            title='Create Employee'
          />
        </Stack>
      </Scene>
    </Router>
  )
}

export default RouterComponent