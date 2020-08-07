import { TState } from '@/types/store/state';

const state = () => ({
  data: null,
  isLoading: false,
  hasError: false,
})

const mutations = {
  setEmployees(state: TState, payload: any) { 
    state.data = payload
  }
}

export default {
  state,
  mutations
}