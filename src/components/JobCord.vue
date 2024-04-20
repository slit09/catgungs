<template>
  <div class="rows">
  <div >
    <div class="card" style="width: 18rem;">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
        <h5 class="card-title">{{nickname}}ммр</h5>
        <p class="card-text">
          Возраст {{age}} <br/></p>
        <a href="#" class="btn btn-primary">начать тренировку</a>
  </div>
</div>
  </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'JobCord',
  emits:['delete', 'edit'],
  props: {
    nickname: '',
    age : ''
  },
  methods:{
    deleteCat(){
      this.$emit('delete', this.$props.id)
    }
  }
}
</script>
