<template>
  <div class="rows">
  <h1> Редактирование сотрудника {{staff.nickname}} </h1>
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
      <div class="mb-3">
        <label for="catStreet" class="form-label">Место патрулирования</label>
        <input v-model = "staff.street" type="date" class="form-control" id="catJobDate">
      </div>
      <button v-on:click="editJob" class="btn btn-primary">Сохранить</button>
      </div>
  </div>
</template>

<script>
import Cat from '@/lib/Cat.js'
export default {
  name: 'JobEdit',
  props: {
    id: Number
  },
  data(){
    return {
       staff:  Cat
    }
   
  },
  methods:{
    ediJob(){
        this.$store.commit('editWorker', {...this.staff})
        //this.staff = new Cat()
    }
  },
  mounted(){
    this.$el.staff = this.$store.getters.getCatbyId(this.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
