/* eslint-disable @typescript-eslint/no-explicit-any*/
import { ActionTree } from 'vuex';
import { axiosInstance } from '@/api'
import TState from '@/types/store/state';
import IEmployee from '@/types/store/Employee';

const state = () => ({
  data: null,
  isLoading: false,
  hasError: false,
})

const getters = {
  emptySallary: (state: TState) => (id: number) => {
    const selectedEmployee = state.data.find((employee: IEmployee) => employee.id === id)
    return selectedEmployee.employee_salary > 0
  }
}

const mutations = {
  getEmployeesRequest(state: TState) {
    state.isLoading = true
  },
  getEmployeesSuccess(state: TState, payload: IEmployee) {
    state.data = payload
    state.isLoading = false
    state.hasError = false
  },
  getEmployeesFailure(state: TState) {
    state.isLoading = false
    state.hasError = true
  },
  setEmployeeCurrentValue(state: TState, payload: { id: number; value: number }) {
    const employeeIndex = state.data.findIndex((item: IEmployee) => item.id === payload.id)
    const selectedEmployee = state.data.find((item: IEmployee) => item.id === payload.id)
    const updatedEmployee = {
      ...selectedEmployee, 
      'employee_current_value': selectedEmployee['employee_current_value'] += payload.value }
    state.data.splice(employeeIndex, 1, updatedEmployee)
  }
}

const actions: ActionTree<any, any> = {
  async callEmpoyees({ commit }) {
    commit('getEmployeesRequest')
    try {
      const response = await axiosInstance.get('/employees')
      // Add another control property to monitor progress
      const updatedResponse = response.data.data.map((item: IEmployee) => ({ ...item, 'employee_current_value': 0 }))
      commit('getEmployeesSuccess', updatedResponse)
    } catch (e) {
      console.log(e)
      commit('getEmployeesFailure')
    }
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}