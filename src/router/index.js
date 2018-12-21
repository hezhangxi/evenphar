import Vue from 'vue'
import Router from 'vue-router'
import elayout from '@/components/elayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/',
    	name:'elayout',
    	component:elayout
    }
  ]
})
