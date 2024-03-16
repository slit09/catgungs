import { createStore } from 'vuex'

export default createStore({
  state: {
    workers : []
  },
  getters: {
    getAllJob(state){
      return state.workers
    },
    getCatId: state =>(id) =>{
      return state.workers.find(a=> a.idCat == id);
    }
  },
  mutations: {
    addWorker(state, par){
      this.state.workers.push(par)
    },
    deleteCatName(state, par){
      state.workers = state.workers.filter(a => a.id != par)
    },

    editWorker(state, par){
      state.workers = state.workers.filter(a => a.id != par.id);
      state.workers.push(par);
    }
  },
  actions: {
    download(store){
      let url ='';
      fetch(url).then(resusult=> resusult.json())
      .then(res=>res.map(a=>{
        store.commit('addworker',{id: a.id, nickname: a.username, street: a.address.street})
      })).catch
    }
  },
  modules: {
  }
})