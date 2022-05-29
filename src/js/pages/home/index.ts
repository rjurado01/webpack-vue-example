import { defineComponent } from 'vue';
import template from './index.pug';
import exampleComponent from 'js/components/example/index.js'
import hello from 'js/components/hello'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

export default defineComponent({
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
    vuexCount(): number {
      return this.$store.state.count
    }
  },
  setup() {
    const text = ref<String>('Ref text')

    const { t } = useI18n()

    console.log('home')

    return { t, text }
  },
  methods: {
    increment() : void {
      this.count += 1
    },

    incrementVuexCount() : void {
      this.$store.commit('increment')
    }

    // loadUsers() {
    //   axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
    //     this.users = response.data
    //   })
    // }
  }
})
