import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Inner from '@/components/Inner'
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
      path: '/hi',
      name: 'Hi',
      component: Hi,
	  children:[
		{ path: '/inner',  name: 'Inner',component: Inner}
       ]
    }
  ]
})
