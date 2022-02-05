import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import CustomerList from "./components/customer/CustomerList.vue";
import CustomerManage from "./components/customer/CustomerManage.vue";
import ImportFromFile from "./components/customer/ImportFromFile.vue";



const routes = [
  { path: "/", component: CustomerList },
  { path: "/manage-customer/:id?", component: CustomerManage },
  { path: "/import-from-file", component: ImportFromFile },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
