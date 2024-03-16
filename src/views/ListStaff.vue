<template>
  <div class="rows">
  <h1> Список сотрудников банды!!!</h1>
  <div v-if="staff">
  <div v-for="cat in staff" :key = "cat.nickname" >
    <JobCard :id="cat.id" 
       :nickname="cat.nickname" 
       :age="cat.age" 
       :startDate="cat.dateStartJob" v-on:delete="deleteCat" />
    
  </div>
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