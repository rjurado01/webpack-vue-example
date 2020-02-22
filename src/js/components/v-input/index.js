import template from "./index.pug";

export default Vue.extend({
  template: template(),
  props: {
    value: [String, Number],
  }
});
