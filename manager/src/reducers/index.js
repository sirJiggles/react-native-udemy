import { combineReducers } from 'redux'
import Auth from './Auth'
import EmployeeForm from './EmployeeForm'

export default combineReducers({
  // auth state is made by Auth reducer
  auth: Auth,
  employeeForm: EmployeeForm
})