import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Fenlei from '@/components/Fenlei'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
       path: '/fenlei',
      name: 'Fenlei',
      component: Fenlei
    }
  ]
})
