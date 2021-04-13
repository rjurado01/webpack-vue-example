import template from './index.pug';
import exampleComponent from 'js/components/example/index.js'

export default {
  template: template(),
  components: {
    exampleComponent
  },
  data() {
    return {
      users: null
    }
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
    },

    loadUsers() {
      axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        this.users = response.data
      })
    }
  }
}
