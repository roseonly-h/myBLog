import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from "vue-router"

import addBlog from "./components/AddBlogs"
import showBlog from "./components/ShowBlogs"
import SingleBlog from "./components/SingleBlog"
// Vue.prototype.$route = VueRouter
Vue.use(VueRouter)
const routes = [
  {
    path:'/addBlog',
    component: addBlog
  },
  {
    path:'/',
    component:showBlog
  },
  {
    path:'/blog/:id',
    component:SingleBlog
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'active'
})


Vue.config.productionTip = false
Vue.prototype.axios = axios
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
