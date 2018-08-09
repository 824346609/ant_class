// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Routers from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import store from './vuex/store'
import 'element-ui/lib/theme-chalk/index.css'
import jujWid from './util/wid'

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(jujWid);
Vue.use(Vuex)
const RouterConfig = {
    mode: 'history',
    routes: Routers
}
const router = new VueRouter(RouterConfig);
router.beforeEach((to,from,next) =>{
  window.document.title = to.meta.title;
  next();
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => {
        return h(App)
    }
})
