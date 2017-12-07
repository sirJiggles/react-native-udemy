import ActionNames from '../enums/actions'

export const employeeUpdate = ({prop, value}) => {
  return {
    type: ActionNames.employeeUpdate,
    payload: {prop, value}
  }
}