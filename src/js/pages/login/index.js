import template from "./index.pug";
import vInput from '../../components/v-input/index.js';

export default Vue.extend({
  template: template(),
  components: {
    vInput
  },
  data() {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit() {
      this.$router.push('/home');
    }
  }
});
