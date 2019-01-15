<template>
    <div class="sider-tab" :class="{'is-active':isActive}" @click.stop="toggleClick">切换按钮</div>
</template>

<script>
export default {
  name: 'NavTab',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  @import '@/scss/variables.scss';
  .sider-tab{
  position: absolute;
  right: -18px;
  top: 50%;
  margin-top: -50px;
  font-size: 12px;
  color: $them-siderItemColorHover;
  width: 18px;
  height: 92px;
  padding: 14px 0;
  line-height: 16px;
  text-align: left;
  background: url("http://kycxfhj.co.cnki.net/Themes/default/images/menuIconBg.png");
}
</style>
