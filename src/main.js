import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false
 
import Home from "./components/Home.vue";
import ManageCustomer from "./components/customer/ManageCustomer.vue";

const routes = [
 { path: '/index-page', component: Home },
 { path: '/manage-customer', component: ManageCustomer }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
