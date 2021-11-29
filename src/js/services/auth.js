import { provide } from 'vue'

export default {
  install(app, _options) {
    app.config.globalProperties.global = 1
    app.provide('injected', 2)
  }
}
