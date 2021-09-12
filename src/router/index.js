import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'



Vue.use(VueRouter)

const routes = [
  {
	  path: '/',
	  component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
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
