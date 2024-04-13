<template>
  <div class="rows">
  <h1> Запрос на титул тренера {{staff.nickname}} </h1>
      <div>
          <div class="mb-3">
          <label for="CatName" class="form-label">сколько ммр</label>
          <input v-model="staff.nickname" type="text" class="form-control" id="CatName" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="catAge" class="form-label">сколько играешь</label>
        <input v-model="staff.age" type="text" class="form-control" id="catAge">
      </div>
      <div class="mb-3">
        <label for="catJobDate" class="form-label">Дата запроса</label>
        <input v-model = "staff.dateStartJob" type="date" class="form-control" id="catJobDate">
      </div>

      <button v-on:click="editJob" class="btn btn-primary">Сохранить</button>
      </div>
  </div>
</template>

<script>
import Cat from '@/lib/Cat.js'
export default {
  name: 'JobComment',
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
        this.$store.commit('addWorker', {...this.staff})
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
