import template from './index.pug';
import exampleComponent from 'js/components/example/index.js'
import { useI18n } from 'vue-i18n'

import { inject } from 'vue'

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
    const { t } = useI18n()

    console.log('home')

    console.log('home setup / injected:', inject('injected'))
    console.log('home setup / global:', '-')

    return { t }
  },
  mounted() {
    console.log('home mounted / global:', this.global)
    console.log('home mounted / injected:', inject('injected'))
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
