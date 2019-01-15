
<template>
  <section>
        <!--含有一个子节点导航-->
        <el-submenu :index="item.path" v-if="item.children" >
          <template slot="title" class="right">
            <i class="el-icon-location left-icon"></i>
            <span class="item-name" slot="title">{{item.name}}</span>
          </template>
          <menu-item v-for="child in item.children" :name="child.name"
                      :key='child.path' :item-index="child.path"
                     :route-path="child.path"></menu-item>
        </el-submenu>
        <!--无子节点导航-->
        <router-link :to="item.path" class="route-path" v-if="!item.children">
          <el-menu-item :index="item.path">
            <template>
              <i class="el-icon-menu left-icon"></i>
              <span class="item-name">{{item.name}}</span>
            </template>
          </el-menu-item>
        </router-link>

  </section>
</template>

<script>
import MenuItem from './menu-item'
import AppLink from './link'
export default {
  name: 'SiderBar',
  data () {
    return {
      isCollapse: true,
      name: 'dasdsds'
    }
  },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  components: {MenuItem, AppLink}

}
</script>
<style rel="stylesheet/scss" lang="scss">
  /*@import "@/scss/mixin.scss";
  @import '@/scss/variables.scss';
  .route-path{
    color: #333333;
    text-decoration: none;
    &:hover{
      background-color: $them-siderItemBgHover;
      color: $them-siderItemColorHover;
    }
  }*/
  .hideSidebar{
    .item-name{
      display: none;
    }
    .el-menu .el-submenu .el-submenu__title i.el-submenu__icon-arrow{
      display: none;
    }
  }
</style>
