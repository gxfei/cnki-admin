<template>
  <div class="header_wrapper" :class="[deviceClass]">
    <div class="header-title"><p>大学生毕业设计（论文）管理系统</p></div>
    <div class="header-user">
      <p>dms欢迎使用系统</p>
      <p>退出</p>
    </div>
  </div>
</template>

<script>
import resizeHandler from '../../mixins/resizeHandler'
export default {
  name: 'index',
  mixins: [resizeHandler]
}
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  @import "@/styles/common/themes.scss";
  .header_wrapper {
    position: fixed;
    top: 0;
    padding: 0 15px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    color: #ffffff;
    font-weight: bold;
    background-color: $header-background-color;
    background:url('../../../../assets/images/common/banner.gif') no-repeat left;
    .header-title{
      float: left;
      p{
        text-shadow: 3px 3px 3px #000;
        font-family: "微软雅黑";
      }
    }
    .header-user{
      float: right;
    }
    &.pc{
      height: $header-height;
      .header-title{
        line-height:$header-height ;
        p{
          font-size: 32px;
          padding-left: 105px;
        }
      }
    }
    &.pad{
      height: $header-height/2;
      .header-title{
        line-height:$header-height/2 ;
        p{
          font-size: 24px;
          padding-left: 35px;
        }
      }
    }
    &.mobile{
      display: none;
      height: 0;
      .header-title{
        line-height:0 ;
        p{
          font-size: 16px;
          padding-left: 5px;
        }
      }
    }
  }
</style>
