import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Fenlei from '@/components/Fenlei'
import Biqiang from '@/components/Biqiang'
import Shopping from '@/components/Shopping'
import Denglu from '@/components/Denglu'
import Zhuce from '@/components/Zhuce'
import Remen from '@/components/Remen'
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
      component: Fenlei,
      children:[ 
        {
          path: 'remen',
          name: 'Remen',
          component: Remen
        }
      ]
    },
    {
       path: '/biqiang',
      name: 'Biqiang',
      component: Biqiang
    },
    {
       path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
       path: '/denglu',
      name: 'Denglu',
      component: Denglu
    },
    {
       path: '/zhuce',
      name: 'Zhuce',
      component: Zhuce
    }
  ]
})
