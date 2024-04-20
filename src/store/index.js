 import { createStore } from 'vuex'

 export default createStore({
   state: {
     workers : [],
     trenertitles:[]
   },
   getters: {
     getAllJob(state){
       return state.workers
     },
     getCatbyId: state =>(id) =>{
       return state.workers.find(a=> a.id == id);
     },
     getAllTitle(state){
      return state.workers
    },
    getTitlebyId: state =>(id) =>{
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
    },
    addTitle(state, par){
      this.state.trenertitles.push(par)
    },
    editTitle(state, par){
      state.trenertitles = state.trenertitles.filter(a => a.id != par.id)
      this.state.trenertitles.push(par)
    },
    deleteTitle(state, par){
      state.trenertitles = state.trenertitles.filter(a => a.id != par)
   }
   },
   actions: {
    download(store){
      let users = [{id: 1, nickname: '2000', age: 17},{id: 2, nickname: '970', age: 29},{id: 3, nickname: '556', age: 15},{id: 4, nickname: '1488', age: 66},{id: 5, nickname: '9787', age: 27},{id: 6, nickname: '8325', age: 50},{id: 7, nickname: '3436', age: 23},{id: 8, nickname: '2341', age: 37},{id: 9, nickname: '1789', age: 34},{id: 10, nickname: '455', age: 11}, ]
      for(let i =0; i < users.length; i++ ){
        store.commit('addWorker',   {...users[i]})
      }
    }

    },
    modules: {
    }
  }
)
