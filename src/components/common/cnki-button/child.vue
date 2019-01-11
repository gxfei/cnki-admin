<template>
  <div></div>
</template>

<script>
export default {
  name: 'child',
  inject: ['name'],
  mounted () {
    console.log(this.name) // Aresn
  }
}
</script>

<style scoped rel="stylesheet/scss" lang="scss">

</style>
