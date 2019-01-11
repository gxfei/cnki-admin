<template>
  <div  class="change-wrap" :class="[deviceClass]">
    <i-header></i-header>
    <div class="select-role">
        <div class="select-role-cont">
          <div class="role-menu">
            <el-menu :default-active="activeIndex" unique-opened
                 class="el-menu-demo"
                 text-color="#666666"
                 background-color="#ffffff"
                 active-text-color="#ef1c24"
        >
          <div class="change-title">选择系统</div>
          <el-submenu v-for="option in options" :key="option.value" :index="option.value">
            <template slot="title">{{option.label}}</template>
            <div class="change-title">选择角色</div>
            <el-menu-item  v-for="child in option.children" :key="option.value+'-'+child.value" :index="option.value+'-'+child.value" @click="selectMenu(child)">{{child.label}}</el-menu-item>
          </el-submenu>
        </el-menu>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import iHeader from '../layout/iheader/index'
import resizeHandler from '../mixins/resizeHandler'
export default {
  name: 'index',
  components: {iHeader},
  mixins: [resizeHandler],
  data () {
    return {
      activeIndex: '2-4-1',
      options: [
        {
          value: 'xiangmuyi',
          label: '系统项目一',
          children: [
            {
              value: 'guanliyuan',
              label: '管理员'
            },
            {
              value: 'tiantan',
              label: '研发'
            },
            {
              value: 'chanpin',
              label: '产品'
            },
            {
              value: 'kefu',
              label: '客服'
            },
            {
              value: 'xiaoshou',
              label: '销售'
            }
          ]
        },
        {
          value: 'xiangmuer',
          label: '系统项目二',
          children: [
            {
              value: 'guanliyuan',
              label: '管理员'
            },
            {
              value: 'tiantan',
              label: '研发'
            },
            {
              value: 'chanpin',
              label: '产品'
            },
            {
              value: 'kefu',
              label: '客服'
            },
            {
              value: 'xiaoshou',
              label: '销售'
            }
          ]
        }
      ]
    }
  },
  methods: {
    selectMenu (id) {
      console.log(id)
      this.$router.push('/')
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  .change-wrap{
    .el-menu{
      border: none !important;
    }
    .el-submenu.is-active .el-submenu__title{
      color: #b93c3c !important;
    }
    .el-menu-demo {
      .el-menu--inline {
        position: absolute;
        top: 0px !important;
        left: 196px !important;
        z-index: 2043 !important;
        background: #bfcbd9;
      }
    }
    .el-submenu .el-menu-item {
      height: 50px;
      line-height: 50px;
      padding: 0 45px;
      min-width: 196px;
    }
    &.mobile{
      .el-menu-demo {
        .el-menu--inline {
          left: 110px !important;
        }
      }
      .el-submenu .el-menu-item {
        height: 50px;
        line-height: 50px;
        padding: 0 45px;
        min-width: 56px;
      }
    }
  }

</style>
<style scoped rel="stylesheet/scss" lang="scss">
  @import "@/styles/common/themes.scss";
  .change-wrap{
    width: 100%;
    height: 100%;
    background: url("../../../assets/images/common/R-zhongxin.png");
    background-repeat: no-repeat;
    background-position:center;
    background-size: 100% 100%;
    .select-role{
      position: absolute;
      width: 100%;
      bottom: 0px;
      left: 0px;
      right:0px;
      .select-role-cont{
        margin: auto;
        margin-top: 120px;
        padding: 0px 100px;
        height: 400px;
        width: 400px;
        background: #ffffff;
        box-shadow: 0px 4px 19px 3px #e3e2e5;
        border-top: 9px solid #c73625;
        .role-menu{
          width: 196px;
          .change-title{
            padding: 27px 0;
            text-align: center;
            font-weight: bold;
            color: #323232;
            text-align: center;
            border-bottom: 1px solid #2c3b42;
          }
        }

      }
    }
    &.pc{
      .select-role{
        top:$header-height;
      }
    }
    &.pad{
      .select-role{
        top:$header-height/2;
      }
    }
    &.mobile{
      .select-role{
        top:0;
        .select-role-cont{
          padding: 0px 50px;
          height: 400px;
          width: 220px;
          .role-menu{
            width: 110px;
          }
        }
      }
    }
  }
</style>
