import template from './index.pug';
import component from 'js/components/example/index.js'

export default {
  template: template(),
  components: {
    component
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  setup() {
    console.log('home')
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
