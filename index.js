import template from "./index.pug";

export default Vue.extend({
  template: template(),
  props: {
    value: [String, Number],
    name: {type: String, required: true },
    type: {type: String, default: 'text'}
  },
  data() {
    return {
      users: []
    };
  },
  methods: {
    setValue(event) {
      this.value = event.target.value;
      this.$emit('input', value);
    }
  }
});
