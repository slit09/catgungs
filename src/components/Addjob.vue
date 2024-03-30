<template>
  <div class="rows">
  <h1> Предложить для картины идеи </h1>
      <div>
          <div class="mb-3">
          <label for="CatName" class="form-label">тема</label>
          <input v-model="staff.nickname" type="text" class="form-control" id="CatName" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="catAge" class="form-label">дополнительное описание</label>
        <input v-model="staff.age" type="text" class="form-control" id="catAge">
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
        this.staff = new Cat()
    }
  },
  mounted(){
    this.staff.id = new Date().getTime();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
