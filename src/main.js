import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Member from './components/Member.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/Member', component: Member }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
