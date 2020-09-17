Vue.createApp({
  setup() {
    return {
      msg: Vue.ref('Hello World !')
    }
  },
  template: `
    <div>
      Test : {{ msg }}
    </div>
  `,
  created() {
    console.log(this.msg)
  }
}).mount('#app')
