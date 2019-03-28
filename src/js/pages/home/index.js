import template from "./index.pug";
import ExampleComponent from "js/components/example/example.js";

export default Vue.extend({
  template: template(),
  components: {
    ExampleComponent
  },
  data() {
    return {
    }
  },
  methods: {
  }
});
