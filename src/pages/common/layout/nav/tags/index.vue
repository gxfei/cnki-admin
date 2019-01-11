<template>
  <div class="tags-wrap">
    <ul>
      <li v-for="tag in visitedViews" :key="tag.path">{{tag}}</li>
      <li>smnsn</li>
      <li>smnsn</li>
      <li>smnsn</li>
      <li>smnsn</li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'index',
  computed: {
    ...mapGetters(['visitedViews'])
  }
}
</script>

<style scoped rel="stylesheet/scss" lang="scss">
.tags-wrap{
  background: #ffffff;
  ul{
    margin: 0px;
    padding: 0px;
  }
  li{
    list-style: none;
    float: left;
    margin: 0 6px;
    background: pink;
  }
}
</style>
