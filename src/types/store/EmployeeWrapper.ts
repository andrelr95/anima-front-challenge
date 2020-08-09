import Employee from './Employee'

export default interface IEmployeeWrapper {
  data: Array<Employee>
  message: string
  status: string
}