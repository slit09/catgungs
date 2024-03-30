<template>
  <div class="rows">
  <div >
    <div class="card" style="width: 18rem;">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
        <h5 class="card-title">{{nickname}}</h5>
        <p class="card-text">
          Возраст {{age}} <br/>
          Дата приема на работу {{startDate}} <br/>
          Место патрулирования:  {{street}}

        </p>
        <router-link class="btn btn-primary" :to="{ name: 'edit', params:{id: id }}">Редактировать</router-link> 
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
  emits:['delete', 'edit'],
  props: {
    id: '',
    nickname: '',
    age : '',
    startDate : '',
    street: ''
  },
  methods:{
    deleteCat(){
      this.$emit('delete', this.$props.id)
    }
  }
}
</script>
