<template>
  <section>
    <child></child>
    <button class="btn-submit" id="btn"
            :class="'i-button-size-' + size" :disabled="disabled"
            @click="handleClick">
      <slot name="icon"></slot>
      <slot>提交</slot>
    </button>
  </section>
</template>

<script>
import child from './child'
function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}
export default {
  name: 'index',
  provide: {
    name: 'liuying'
  },
  components: {child},
  // inheritAttrs: true,
  props: {
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    text: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    console.log(this.$attrs)
  },
  methods: {
    handleClick () {
      console.log('sdd')
      this.$emit('on-click', 'sss')
    }
  }
}
</script>

<style scoped rel="stylesheet/scss" lang="scss">
.btn-submit{
  background: aliceblue;
}
</style>
