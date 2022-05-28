import template from './index.pug';
import exampleComponent from 'js/components/example/index.js'
import hello from 'js/components/hello'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

export default {
  template: template(),
  components: {
    hello,
    exampleComponent
  },
  data() {
    return {
      count: 25 as number,
      users: null
    }
  },
  computed: {
    countPlusOne(): number {
      return 3
      // return this.$store.state.count
    }
  },
  setup() {
    const aux = ref<String>('aux')

    const { t } = useI18n()

    console.log('home')

    return { t, aux }
  },
  methods: {
    increment() : void {
      // this.$store.commit('increment')
      // this.count += 1
    },

    // loadUsers() {
    //   axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
    //     this.users = response.data
    //   })
    // }
  }
}
