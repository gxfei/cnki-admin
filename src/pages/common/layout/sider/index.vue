<template>
    <section>
      <el-menu default-active="1-4-1"
               class="el-menu-vertical"
               background-color="#2c3b42"
               text-color="#bfcbd9"
               active-text-color="#c73625"
               :collapse="isCollapse">
        <el-submenu index="1-4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="1-4-1">
            <i class="el-icon-arrow-right"></i>
            <span slot="title">选项1</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="2" :class="{'submenu-title-noDropdown':!isNest}">
          <template>
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </template>
        </el-menu-item>
      </el-menu>
    </section>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      // isCollapse: false
    }
  },
  props: {
    isNest: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    siderBar () {
      return this.$store.state.app.sidebar
    },
    isCollapse () {
      return !this.siderBar.opened
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .sidebar-container {
    .el-menu {
      .el-submenu {
        .el-submenu__title {
          padding: 0 10px !important;
        }
      }
      .el-menu-item {
        padding: 0 10px !important;

      }
      .el-menu--inline {
        .el-menu-item {
          padding: 0 20px !important;
        }
      }
      &.el-menu--collapse {
        .el-menu-item {
          .el-tooltip {
            padding: 0 10px !important;
          }
        }
      }
    }
  }

  .sidebar-container {
    .el-menu {
      border: none;
      height: 100%;
      width: 100% !important;
    }
  }
</style>
