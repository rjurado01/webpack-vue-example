import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = API_HOST;

Vue.http.interceptors.push((request, next) => {
  next();
});
