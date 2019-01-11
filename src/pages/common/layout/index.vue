<template>
  <div class="app-wrapper" :class="[deviceClass, classSider]">
    <!--<div class="header_wrapper">header_wrapper</div>-->
    <i-header></i-header>
    <div class="sidebar-container">
      <Sider></Sider>
    </div>
    <div class="nav-bar">
      <Nav></Nav>
    </div>
    <div class="app-cont" @click="handleClickOutside">
      <div class="test">
        <cnki-button size="large" :a="1" @on-click="handleClick">
          <span slot="icon">ddd</span>
        </cnki-button>
      </div>
    </div>
  </div>
</template>

<script>
import Sider from './sider/index'
import Nav from './nav/index'
import iHeader from './iheader/index'
import cnkiButton from '@/components/common/cnki-button'
import resizeHandler from '../mixins/resizeHandler'
export default {
  name: 'index',
  components: {Sider, Nav, iHeader, cnkiButton},
  mixins: [resizeHandler],
  data () {
    return {
      isdisabled: true
    }
  },
  computed: {
    siderBar () {
      return this.$store.state.app.sidebar
    },
    classSider () {
      return {
        hiddenSider: !this.siderBar.opened,
        openSider: this.siderBar.opened,
        withoutAnimation: this.siderBar.withoutAnimation
      }
    },
    device () {
      return this.$store.getters.device
    },
    deviceClass () {
      return {
        mobile: this.device === 'mobile',
        pad: this.device === 'pad',
        pc: this.device === 'pc'
      }
    }
  },
  mounted () {
    this.test()
  },
  methods: {
    handleClickOutside () {
      if (this.device !== 'pc') {
        this.$store.dispatch('closeSideBar', { withoutAnimation: false })
      }
    },
    handleClick (i) {
      console.log(i)
    },
    test () {
      console.log('this.$store.state.app.sidebar', this.$store.state.app.sidebar)
    }
  }
}
</script>
<style scoped rel="stylesheet/scss" lang="scss">
  @import "@/styles/common/themes.scss";
  .app-wrapper {
    width: 100%;
    height: 100%;
    /*.header_wrapper {
      position: fixed;
      top: 0;
      height: $iheader-height;
      width: 100%;
      background-color: $iheader-background-color;
    }*/
    .sidebar-container {
      position: fixed;
      top: $header-height;
      height: 100%;
      width: $sider-width;
      background-color: $sider-background-color;
      color:$sider-color;
      transition: width .28s;
      -moz-transition: width 0.28s;/* Firefox 4 */
      -webkit-transition: width 0.28s;/* Safari 和 Chrome */
      -o-transition: width 0.28s;/* Opera */
      z-index: 999;
    }
    .nav-bar {
      position: fixed;
      top: $header-height;
      left: $sider-width;
      right: 0px;
      height: $nav-height;
      border-bottom: 1px solid #dedede;
      background: $nav-background-color;
      @include transition-left;
    }
    .app-cont {
      position: absolute;
      top: $header-height+$nav-height;
      left: $sider-width;
      right: 0px;
      bottom: 0px;
      @include transition-left;
      padding: 20px;

    }
    &.hiddenSider{
      .sidebar-container {
        width: $sider-min-width !important;
      }
      .nav-bar{left:$sider-min-width;}
      .app-cont{left:$sider-min-width}
    }
    &.pad{
      .header_wrapper{height: $header-height/2;}
      .sidebar-container {
        top: $header-height/2;
        transition: transform .28s;
      }
      .nav-bar{
        top: $header-height/2;
        left:0;
      }
      .app-cont{
        top:$nav-height+$header-height/2;
        left:0px;
      }
      &.hiddenSider {
        .sidebar-container {
          transition-duration: 0.28s;
          transform: translate3d(-$sider-width, 0, 0);
        }
      }
      &.withoutAnimation {
        .app-cont,
        .sidebar-container {
          transition: none;
        }
      }
    }
    &.mobile{
      .header_wrapper{display: none;}
      .sidebar-container{
        top: $header-height/2;
        transition: transform .28s;
      }
      .nav-bar{ left: 0; top:0}
      .app-cont{top:$nav-height;left: 0px}
      &.hiddenSider {
        .sidebar-container {
          transition-duration: 0.28s;
          transform: translate3d(-$sider-width, 0, 0);
        }
      }
      &.withoutAnimation {
        .app-cont,
        .sidebar-container {
          transition: none;
        }
      }
    }
  }
</style>
