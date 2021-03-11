import template from "./index.pug";

export default {
  template: template(),
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
