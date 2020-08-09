/* eslint-disable @typescript-eslint/no-explicit-any*/
import { TState } from '@/types/store/state';
import { ActionTree } from 'vuex';
import { axiosInstance } from '@/api'

const state = () => ({
  data: null,
  isLoading: false,
  hasError: false,
})

const mutations = {
  getEmployeesRequest(state: TState) {
    state.isLoading = true
  },
  getEmployeesSuccess(state: TState, payload: any) {
    state.data = payload.data
    state.isLoading = false
    state.hasError = false
  },
  getEmployeesFailure(state: TState) {
    state.isLoading = false
    state.hasError = true
  }
}

const actions: ActionTree<any, any> = {
  async callEmpoyees({ commit }) {
    commit('getEmployeesRequest')
    try {
      const response = await axiosInstance.get('/employees')
      response.data.data.push({
        'employee_age': 24,
        'employee_name': "Andre Ramos",
        'employee_salary': 0,
        'id': 9999,
        'profile_image': ""
      })
      commit('getEmployeesSuccess', response.data)
    } catch (e) {
      commit('getEmployeesFailure')
    }
  }
}

export default {
  state,
  mutations,
  actions
}