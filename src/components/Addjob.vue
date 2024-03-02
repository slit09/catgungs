<template>
  <div class="rows">
  <h1> Принятие на работу </h1>
      <div>
          <div class="mb-3">
          <label for="CatName" class="form-label">Кличка</label>
          <input v-model="staff.nickname" type="text" class="form-control" id="CatName" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="catAge" class="form-label">Возраст</label>
        <input v-model="staff.age" type="text" class="form-control" id="catAge">
      </div>
      <div class="mb-3">
        <label for="catJobDate" class="form-label">Дата приема на работу</label>
        <input v-model = "staff.dateStartJob" type="date" class="form-control" id="catJobDate">
      </div>
      <button v-on:click="addJob" class="btn btn-primary">Сохранить</button>
      </div>
  </div>
</template>

<script>
import Cat from '@/lib/Cat.js'
export default {
  name: 'Addjob',
  props: {
    msg: String
  },
  data(){
    return {
       staff:  Cat
    }
   
  },
  methods:{
    addJob(){
        this.$store.commit('addWorker', {...this.staff})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>