<template>
  <div class="rows">
  <h1>  Чудо редактор</h1>
    
  <Editor/>
  </div>
</template>

<script>
// @ is an alias to /src
 import JobComment from '@/components/JobComment.vue'
export default {
  name: 'Comment',
  components:{
    JobComment
  },
}
</script>
