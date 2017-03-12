import Vue from 'vue';

Vue.config.debug = true;

// Dependencies JS
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex);

// Dependencies CSS
import 'bulma/css/bulma.css';

import routes from './routes';

const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active',
});

import App from './App.vue';

/* eslint-disable no-new */
new Vue({
  router,
  ...App,
}).$mount('#app');
