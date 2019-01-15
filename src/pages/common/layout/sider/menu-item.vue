<template>
  <router-link :to="routePath" class="route-path">
    <el-menu-item :index="itemIndex">
      <template>
        <i class="left-icon"></i>
        <span class='name'>{{name}}</span>
      </template>
    </el-menu-item>
  </router-link>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    name: {
      default: 'name'
    },
    itemIndex: {
      default: 1
    },
    icon: {
      default: 'el-icon-location'
    },
    routePath: {
      default: '/'
    }
  }
}
</script>
