import { defineComponent } from 'vue';

export default defineComponent({
  template: '<h3>Hello {{ name }} !!</h3>',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const printMsg = (name: string) => console.log(`The message is: ${name}`)

    printMsg(props.name)
  }
})
