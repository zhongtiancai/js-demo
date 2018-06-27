import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Inner from '@/components/Inner'
import Index from '@/components/Index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
	{
      path: '/hi',
      name: 'Hi',
      component: Hi,
	  children:[
		{ path: '/inner',  name: 'Inner',component: Inner}
       ]
    }
  ]
})
