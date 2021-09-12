<template>
  <a-layout class="main" id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <img class="logo" title="内容管理系统" src="@/assets/logo.png" width="60">
      <a-menu
            :default-selected-keys="['1']"
            mode="inline"
            theme="dark"
            :inline-collapsed="collapsed"
          >
            <a-menu-item key="1" class="a-menu-item">
              <a-icon type="home" />
              <span>管理首页</span>
            </a-menu-item>
            <a-menu-item key="2">
              <a-icon type="desktop" />
              <span>小程序管理</span>
            </a-menu-item>
            <a-menu-item key="3">
              <a-icon type="user" />
              <span>用户管理</span>
            </a-menu-item>
            <a-sub-menu key="sub1">
              <span slot="title"><a-icon type="read" /><span>内容管理</span></span>
              <a-menu-item key="5">
                内容库
              </a-menu-item>
              <a-menu-item key="6">
                自定义内容
              </a-menu-item>
              <a-menu-item key="7">
                自定义内容
              </a-menu-item>
              <a-menu-item key="8">
                采集管理
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
		           <a-dropdown>
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
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
         <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>

export default {
  data(){
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
.a-menu-item{
	padding: 5px!important;
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