import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import User from 'js/types/user'

import exampleComponent from 'js/components/example/index.js'
import hello from 'js/components/hello'

import template from './index.pug';

export default defineComponent({
  template: template(),
  components: {
    hello,
    exampleComponent
  },
  data() {
    return {
      count: 25 as number,
      users: null as User[] | unknown
    }
  },
  computed: {
    vuexCount(): number {
      return this.$store.state.count
    }
  },
  setup() {
    const text = ref<string>('Ref text')

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
    },

    loadUsers() {
      const  users: User[] = [
        {name: 'A', email: 'a@email.com', age: 21}
      ];

      this.users = users

    //   axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
    //     this.users = response.data
    //   })
    }
  }
})
