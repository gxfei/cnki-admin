import store from '@/store'

const { body } = document
/* const WIDTH = 1024
const RATIO = 3 */
export default {
  computed: {
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
  watch: {
    $route (route) {
      if ((this.device === 'mobile' || this.device === 'pad') && this.sidebar.opened) {
        store.dispatch('closeSideBar', { withoutAnimation: false })
      }
    }
  },
  beforeMount () {
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted () {
    const isMobile = this.isMobile()
    const isPad = this.isPad()
    if (isMobile) {
      store.dispatch('toggleDevice', 'mobile')
      store.dispatch('closeSideBar', { withoutAnimation: true })
    }
    if (isPad) {
      store.dispatch('toggleDevice', 'pad')
      store.dispatch('closeSideBar', { withoutAnimation: true })
    }
  },
  methods: {
    isMobile () {
      const rect = body.getBoundingClientRect()
      // return rect.width - RATIO < WIDTH
      if (rect.width < 750) {
        return true
      }
      return false
    },
    isPad () {
      const rect = body.getBoundingClientRect()
      if (rect.width > 750 && rect.width < 1280) {
        return true
      }
      return false
    },
    resizeHandler () {
      if (!document.hidden) {
        const isMobile = this.isMobile()
        const isPad = this.isPad()
        let device = 'desktop'
        if (isMobile) {
          device = 'mobile'
        } else if (isPad) {
          device = 'pad'
        } else {
          device = 'pc'
        }
        store.dispatch('toggleDevice', device)
        if (isMobile || isPad) {
          store.dispatch('closeSideBar', { withoutAnimation: true })
        }
      }
    }
  }
}
