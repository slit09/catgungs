<template>
  <div class="container">
  <nav>
    <Menu />
    
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  </div>
</template>
<script>
// @ is alias to  /scr
import Menu from '@/components/Menu.vue'
export default {
    name: 'App',
    components:{
      Menu
    }

  }
</script>





<style>
  
</style>
