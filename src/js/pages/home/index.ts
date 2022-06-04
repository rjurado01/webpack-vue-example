import { defineComponent, provide, ref } from 'vue';
import { useI18n } from 'vue-i18n'
import Axios from 'axios'

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

    const time = ref<number>((new Date).getTime())
    provide('time', time)

    return { t, text, time }
  },
  methods: {
    increment() : void {
      this.count += 1
    },

    incrementVuexCount() : void {
      this.$store.commit('increment')
    },

    updateTime() : void {
      this.time = (new Date).getTime()
    },

    loadStaticUsers() {
      const  users: User[] = [
        {name: 'A', email: 'a@email.com', age: 21},
        {name: 'B', email: 'b@email.com', age: 22}
      ];

      this.users = users
    },

    loadRemoteUsers() {
      Axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        this.users = response.data.map((item : any) => <User> item)
      })
    }
  }
})
