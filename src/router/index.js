import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
  	path: '/',
  	component: Home,
  	redirect: '/dashboard',
  	children:[
  		{
  			path: '/dashboard',
  			name:'Dashboard',
  			component: () => import('@/views/Dashboard')
  		},
		{
			path: '/user/user',
			name:'User',
			component: () => import('@/views/user/user')
		},
  		{
  			path: '/minapp/minapp',
  			name:'Minapp',
  			component: () => import('@/views/minapp/minapp')
  		},
  		{
  			path: '/artcile/artcile',
  			name:'Artcile',
  			component: () => import('@/views/artcile/artcile')
  		}
  	]
  }
 
]
 
const router = new VueRouter({
  routes,
  mode:'history'   //去除#号
})

router.beforeEach((to, from, next) => {
	
	const isLogin = window.sessionStorage.getItem('token')
	if (!isLogin || isLogin === '' || isLogin === 'undefined' || isLogin === 'null') {
		//如果用户token不存在则跳转到login页面
		if (to.path === '/login') {
			next()
		} else {
			next('/login')
		}
		} else {
			//如果用户信息存在则往下执行。
			next()	
	} 
})

export default router
