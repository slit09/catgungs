<template>
  <div class="rows">
  <h1> Список сотрудников банды!!!</h1>

  <div v-for="cat in staff" :key = "cat.id" >
    <JobCard :id="cat.id"
       :nickname="cat.nickname"  
       :age="cat.age" 
       :startDate="cat.dateStartJob"
       :street="cat.street" v-on:delete="deleteCat" />
    
  </div>


  </div>
</template>

<script>
// @ is an alias to /src
import JobCard from '@/components/JobCard.vue'
export default {
  name: 'ListStaff',
  components:{
    JobCard
  },
  computed: {
    staff(){
      return this.$store.getters.getAllJob;
    }
    
  },
  methods:{
    deleteCat(e){
      this.$store.commit('deleteCatName', e)
    }
  }
}
</script>
