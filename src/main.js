import Vue from 'vue'
import App from './App'
import router from './router';

import UserRoleResolverMixin from "./mixins/UserRoleResolver";

Vue.config.productionTip = false;

Vue.mixin(UserRoleResolverMixin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
