import template from "./index.pug";
import vInput from '../../components/v-input/index.js';
import { alertController } from '@ionic/core';

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
      alertController.create({
        header: 'Login Data',
        message: `Email: ${this.data.email}<br>Password: ${this.data.password}`,
        buttons: [{
          text: 'Okay',
          handler: () => {
            this.$router.push('/home');
          }
        }],
      }).then(a => a.present())
    }
  }
});
