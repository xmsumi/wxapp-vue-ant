import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'



Vue.use(VueRouter)

const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
}

const routes = [
  {
    path: '/login',
    name: 'Login',
	meta: { title: '系统登录' },
    component: () => import('../views/Login')
  },
  {
  	path: '/',
  	component: Home,
	meta: { title: '管理首页' },
  	redirect: '/dashboard',
  	children:[
  		{
  			path: '/dashboard',
  			name:'Dashboard',
			meta: { title: '管理首页' },
  			component: () => import('@/views/Dashboard')
  		},
		{
			path: '/user/user',
			name:'User',
			meta: { title: '用户管理' },
			component: () => import('@/views/user/user')
		},
  		{
  			path: '/minapp/minapp',
  			name:'Minapp',
			meta: { title: '小程序管理' },
  			component: () => import('@/views/minapp/minapp')
  		},
  		{
  			path: '/artcile',
			name:'Artcile',
			meta: { title: '内容管理' },
			component: RouteView,
			children:[
				{
					path: '/artcile/myartcile',
					name:'MyArtcile',
					meta: { title: '我的文章' },
					component: () => import('@/views/artcile/myartcile')
				},
				{
					path: '/artcile/artcile',
					name:'Artcile',
					meta: { title: '内容库' },
					component: () => import('@/views/artcile/artcile')
				},
				{
					path: '/artcile/collect',
					name:'Collect',
					meta: { title: '采集管理' },
					component: () => import('@/views/artcile/collect')
				},
			]
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
