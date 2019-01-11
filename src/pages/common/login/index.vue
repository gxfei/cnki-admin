<template>
  <div class="login-wrap" :class="[deviceClass]">
    <p class="cnki-name">毕设账号管理系统</p>
    <div class="login-cont">
      <el-form label-width="58px">
        <el-form-item label="账号：" >
          <el-input v-model="saa"></el-input>
        </el-form-item>
        <el-form-item label="密  码：">
          <el-input v-model="saa"></el-input>
        </el-form-item>
        <el-form-item label="验证码：" class="code">
          <el-input v-model="saa"></el-input>
          <div class="vertical-code">
            <img src="http://192.168.100.66:8093/Handler/LoginHandler.ashx?action=checkcode&0.3484427153457319" />
          </div>
        </el-form-item>
        <el-button @click="onSubmit">登陆</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import resizeHandler from '../mixins/resizeHandler'
export default {
  name: 'index',
  mixins: [resizeHandler],
  computed: {
    // device () {
    //   return this.$store.getters.device
    // },
    // deviceClass () {
    //   return {
    //     mobile: this.device === 'mobile',
    //     pad: this.device === 'pad',
    //     pc: this.device === 'pc'
    //   }
    // }
  },
  data () {
    return {
      saa: 'eee'
    }
  },
  methods: {
    onSubmit () {
      this.$router.push('/identity')
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  .login-cont{
    .el-form-item{
      margin-bottom: 18px;
      height: 26px;
      .el-form-item__label{
        line-height: 16px;
        padding: 9px 0px;
      }
      .el-form-item__content {
        height: 26px;
        line-height: 26px;
        position: relative;
        font-size: 14px;
        display: flex;
        flex-direction: row;
        .el-input{
          width: 196px;
          height: 26px;
          .el-input__inner{
            height: 100%;
            width: 186px;
            line-height: 100%;
            background: #fff;
            padding: 5px 5px;
            vertical-align: middle;
            border-radius: 3px;
          }
        }

      }
      &.code{
        .el-form-item__content{
          display: flex;
          flex-direction: row;
          .el-input{
            width: 96px;
            height: 26px;
            .el-input__inner{
              height: 100%;
              width: 86px;
              line-height: 100%;
              background: #fff;
              padding: 5px 5px;
              vertical-align: middle;
              border-radius: 3px;
            }
          }
        }
      }
    }
    .el-button{
      display: block;
      margin: auto;
      width: 196px;
      height: 25px;
      line-height: 25px;
      background: #30757d;
      vertical-align: middle;
      border-radius: 3px;
      cursor: pointer;
      color: #fff;
      font-weight: bold;
      padding: 0px;
    }

  }
</style>
<style scoped rel="stylesheet/scss" lang="scss">
  .login-wrap {
    width: 100%;
    height: 100%;
    background-image: url("../../../assets/images/common/bg.jpg");
    background-size: cover, 100%;
    background-attachment: fixed;
    background-position: 50% 50%;
    background-color: #E0DEC1;
    display: flex;
    flex-direction: column;
    .cnki-name {
      color: #fff;
      opacity: 0.5;
      font-size: 60px;
      margin: 0 auto;
      padding: 150px 0 60px 0;
    }
    .login-cont {
      margin: 0 auto;
      width: 300px;
      height: 192px;
      padding: 83px 0 0 46px;
      background: url("../../../assets/images/common/login_bg.png") no-repeat center top;

    }
    &.pc{
      .cnki-name{
        font-size: 60px;
      }
    }
    &.pad{
      .cnki-name{
        font-size: 45px;
      }
    }
    &.mobile{
      .cnki-name{
        font-size: 36px;
      }
    }
  }
  .vertical-code{
    width: 80px;
    height: 26px;
    border: 1px solid transparent;
    img{
      width: 80px;
      height: 22px;
    }
  }
</style>
