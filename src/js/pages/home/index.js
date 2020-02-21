import template from "./index.pug";
import ExampleComponent from "js/components/example/example.js";

export default Vue.extend({
  template: template(),
  components: {
    ExampleComponent
  },
  data() {
    return {
      menuOptions: [
        {
          title : "Home",
          url   : "/home",
          icon  : "home"
        },
        {
          title : "Chat",
          url   : "/chat",
          icon  : "chatboxes"
        },
        {
          title : "Contacts",
          url   : "/contacts",
          icon  : "contacts"
        }
      ]
    }
  },
  methods: {
  }
});
