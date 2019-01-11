<template>
    <div class="nav-wrap">
      <recovery :toggle-click="toggleSider" :is-active="siderBar.opened" class="recovery-container"></recovery>
      <tags class="nav-tags"></tags>
    </div>
</template>

<script>
import Recovery from './recovery'
import Tags from './tags'
export default {
  name: 'index',
  components: {Recovery, Tags},
  computed: {
    siderBar () {
      return this.$store.state.app.sidebar
    }
  },
  methods: {
    toggleSider () {
      this.$store.dispatch('toggleSideBar')
    }
  }
}
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  @import '@/styles/common/themes.scss';
  .nav-wrap{
    line-height: $nav-height;
    height: $nav-height;
    .recovery-container{
      line-height: $nav-height;
      height: $nav-height;
      float: left;
      padding: 0 10px;
    }
    .nav-tags{
      float: left;
    }
  }

</style>
