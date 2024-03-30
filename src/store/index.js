import { createStore } from 'vuex'

export default createStore({
  state: {
    workers : []
  },
  getters: {
    getAllJob(state){
      return state.workers
    },
    getCatbyId: state =>(id) =>{
      return state.workers.find(a=> a.id == id);
    }
  },
  mutations: {
    addWorker(state, par){
      this.state.workers.push(par)
    },
    editWorker(state, par){
      state.workers = state.workers.filter(a => a.id != par.id)
      this.state.workers.push(par)
    },
    deleteCatName(state, par){
      state.workers = state.workers.filter(a => a.id != par)
    }
  },
  actions: {
    download(store){
        let url='https://jsonplaceholder.typicode.com/users';
        fetch(url).then(resusult=> resusult.json())
        .then(res => res.map(a=> {
        store.commit('addWorker',   { id: a.id, nickname: a.username, street: a.address.street})
    })).catch(e => alert("Что то пошло не так!! "));
    }

  },
  modules: {
  }
})
