import { createStore } from 'vuex'

export default createStore({
  state: {
    workers : []
  },
  getters: {
    getAllJob(state){
      return state.workers
    }
  },
  mutations: {
    addWorker(state, par){
      this.state.workers.push(par)
    },
    deleteCatName(state, par){
      state.workers = state.workers.filter(a => a.nickname != par)
    }
  },
  actions: {
  },
  modules: {
  }
})