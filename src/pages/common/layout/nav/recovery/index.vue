<template>
  <div>
    <svg
      :class="{'is-active':isActive}"
      viewBox="0 0 1024 1024"
      width="64"
      height="64"
      p-id="1691"
      class="hamburger"
      @click="toggleClick"
      >
      <path
        d="M112.64 491.52l204.8-128c15.36-10.24 30.72-5.12 35.84 5.12 5.12 5.12 5.12 10.24 5.12 15.36v256c0 10.24-10.24 25.6-25.6 25.6-5.12 0-10.24 0-15.36-5.12l-204.8-128c-10.24-5.12-15.36-20.48-5.12-35.84l5.12-5.12zM153.6 819.2h716.8c30.72 0 51.2 20.48 51.2 51.2s-20.48 51.2-51.2 51.2H153.6c-30.72 0-51.2-20.48-51.2-51.2s25.6-51.2 51.2-51.2z m358.4-358.4h358.4c30.72 0 51.2 20.48 51.2 51.2s-20.48 51.2-51.2 51.2h-358.4c-30.72 0-51.2-20.48-51.2-51.2s25.6-51.2 51.2-51.2zM153.6 102.4h716.8c30.72 0 51.2 20.48 51.2 51.2s-20.48 51.2-51.2 51.2H153.6c-25.6 0-51.2-20.48-51.2-51.2s25.6-51.2 51.2-51.2z"
        fill="#000000">
      </path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'index',
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

<style scoped>
  .hamburger {
    vertical-align: middle;
    display: inline-block;
    cursor: pointer;
    width: 20px;
    height: 20px;
    transform: rotate(180deg);
    transition: .38s;
    transform-origin: 50% 50%;
  }

  .hamburger.is-active {
    transform: rotate(0deg);
  }
</style>
