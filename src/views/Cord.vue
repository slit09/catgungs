<template>
  <div class="rows">
  <h1> fffff</h1>

  <div v-for="cat in staff" :key = "cat.id" >
    <TitleCard :id="cat.id"
       :nickname="cat.nickname"  
       :age="cat.age" 
       :startDate="cat.dateStartJob"
       :street="cat.street" v-on:delete="deleteCat" />
    
  </div>


  </div>
</template>

<script>
// @ is an alias to /src
import TitleCard from '@/components/TitleCard'
export default {
  name: 'Cord',
  components:{
    TitleCard
  },
  computed: {
    staff(){
      return this.$store.getters.getAllTitle;
    }
    
  },
  methods:{
    deleteCat(e){
      this.$store.commit('deleteTitle', e)
    }
  }
}
</script>
