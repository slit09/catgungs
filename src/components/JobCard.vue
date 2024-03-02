<template>
  <div class="rows">
  <div >
    <div class="card" style="width: 18rem;">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
        <h5 class="card-title">{{nickname}}</h5>
        <p class="card-text">
          Возраст {{age}} <br/>
          Дата приема на работу {{startDate}}
        </p>
        <a href="#" class="btn btn-secondary">Редактировать</a>
        <button v-on:click="deleteCat" type="button" class="btn btn-danger">Удалить</button>
  </div>
</div>
  </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'JobCard',
  emits:['delete'],
  props: {
    nickname: '',
    age : '',
    startDate : ''
  },
  methods:{
    deleteCat(){
      this.$emit('delete', this.$props.nickname)
    }
  }
}
</script>