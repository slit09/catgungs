<template>
  <div class="rows">
    <h1>Принятие на работу</h1>
    <div>
    <div class="mb-3">
      <label for="CatName" class="form-label">Кличка</label>
      <input type="email" class="form-control" id="CatName" aria-describedby="emailHelp">

    </div>
    <div class="mb-3">
      <label for="catAge" class="form-label">Возраст</label>
      <input type="password" class="form-control" id="catAge">
    </div>
    <button class="btn btn-primary">Сохранить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Addjob',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
'