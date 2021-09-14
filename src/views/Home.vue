<template>
  <a-layout class="main" id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <router-link class="layout-logo opacity" :to="{ name: 'Dashboard' }"><img  title="内容管理系统" src="@/assets/logo-home.png" height="31"> </router-link>
      <a-menu  :default-selected-keys="['/dashboard']"  mode="inline" theme="dark"  :inline-collapsed="collapsed" >
            <a-menu-item key="/dashboard" class="a-menu-item">
				<router-link :to="{ name: 'Dashboard' }">
				  <a-icon type="home" />
				  <span>管理首页</span>
				 </router-link>
            </a-menu-item>
            <a-menu-item key="/minapp/minapp">
				<router-link :to="{ name: 'Minapp' }">
				  <a-icon type="desktop" />
				  <span>小程序管理</span>
				  </router-link>
            </a-menu-item>
            <a-menu-item key="/user/user">
				<router-link :to="{ name: 'User' }">
				  <a-icon type="user" />
				  <span>用户管理</span>
				</router-link>
            </a-menu-item>
            <a-sub-menu key="sub1">
              <span slot="title"><a-icon type="read" /><span>内容管理</span></span>
              <a-menu-item key="/artcile/artcile">
				  <router-link :to="{ name: 'Artcile' }">
					内容库
				  </router-link>
              </a-menu-item>
              <a-menu-item key="/artcile/myartcile">
				  <router-link :to="{ name: 'MyArtcile' }">
					我的文章
				  </router-link>
              </a-menu-item>
              <a-menu-item key="/artcile/collect">
				 <router-link :to="{ name: 'Collect' }"> 
					采集管理
				</router-link>
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <span slot="title"><a-icon type="appstore" /><span>更多应用</span></span>
              <a-menu-item key="9">
                Option 9
              </a-menu-item>
              <a-menu-item key="10">
                Option 10
              </a-menu-item>
              <a-sub-menu key="sub3" title="Submenu">
                <a-menu-item key="11">
                  Option 11
                </a-menu-item>
                <a-menu-item key="12">
                  Option 12
                </a-menu-item>
              </a-sub-menu>
            </a-sub-menu>
          </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
		  <a-row type="flex" justify="space-between">
		        <a-col :span="1">
					 <a-icon
					   class="trigger"
					   :type="collapsed ? 'menu-unfold' : 'menu-fold'"
					   @click="() => (collapsed = !collapsed)"
					 />
		        </a-col>
		        <a-col :span="2">
		           <a-dropdown :size="large">
		               <a class="ant-dropdown-link" @click="e => e.preventDefault()">
		                 <a-icon type="setting" />  管理设置 <a-icon type="down" />
		               </a>
		               <a-menu slot="overlay">
		                 <a-menu-item key="0">
		                   系统设置
		                 </a-menu-item>
		                 <a-menu-item key="1">
		                   修改密码
		                 </a-menu-item>
		                 <a-menu-divider />
		                 <a-menu-item key="3" @click="logout()">
		                   退出登录
		                 </a-menu-item>
		               </a-menu>
		             </a-dropdown>
					 
		        </a-col>
		      </a-row>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '12px 16px', padding: '12px',minHeight: '280px' }"
      > <a-breadcrumb>
    <a-breadcrumb-item key="/dashboard">
		<router-link :to="{ name: 'Dashboard' }">
		  <a-icon type="home" />
		</router-link>
    </a-breadcrumb-item>
    <a-breadcrumb-item>
      {{ $route.meta.title}}
    </a-breadcrumb-item>
  </a-breadcrumb> 
         <router-view :style="{ margin: '12px 0px',padding: '12px',background: '#fff', minHeight: '280px' }"></router-view>
      </a-layout-content>
	  
    </a-layout>
  </a-layout>
  
</template>

<script>

export default {
  data(){
	  const { lang } = this.$route.params;
  	return{
  		collapsed: false,
	}
  },
  created(){
    
  },
  methods:{
	 logout(){
		 window.sessionStorage.clear()
		 this.$router.push('/login')
	 }
  }
}
</script>
<style>
.main{
	height: 100vh;
}
.layout-logo {
    overflow: hidden;
    height: 66px;
    line-height: 66px;
    display: block;
    text-align: center;
    border-bottom: 1px solid rgba(255,255,255,.1);
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>