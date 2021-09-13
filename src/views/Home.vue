<template>
  <a-layout class="main" id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <img class="logo" title="内容管理系统" src="@/assets/logo.png" width="60">
      <a-menu  :default-selected-keys="['/']"  mode="inline" theme="dark"  :inline-collapsed="collapsed" >
            <a-menu-item key="/" class="a-menu-item">
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
		           <a-dropdown :size="large">
		               <a class="ant-dropdown-link" @click="e => e.preventDefault()">
		                 <a-icon type="setting" />  管理设置 <a-icon type="down" />
		               </a>
		               <a-menu slot="overlay">
		                 <a-menu-item key="0" @click="showModal">
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
					 <a-modal
					       title="Title"
					       :visible="visible"
					       :confirm-loading="confirmLoading"
					       @ok="handleOk"
					       @cancel="handleCancel"
						   width = "700px"
					     >
					       <a-form-model
					           ref="ruleForm"
					           :model="form"
					           :rules="rules"
					           :label-col="labelCol"
					           :wrapper-col="wrapperCol"
					         >
					           <a-form-model-item ref="name" label="Activity name" prop="name">
					             <a-input
					               v-model="form.name"
					               @blur="
					                 () => {
					                   $refs.name.onFieldBlur();
					                 }
					               "
					             />
					           </a-form-model-item>
					           <a-form-model-item label="Activity zone" prop="region">
					             <a-select v-model="form.region" placeholder="please select your zone">
					               <a-select-option value="shanghai">
					                 Zone one
					               </a-select-option>
					               <a-select-option value="beijing">
					                 Zone two
					               </a-select-option>
					             </a-select>
					           </a-form-model-item>
					           <a-form-model-item label="Activity time" required prop="date1">
					             <a-date-picker
					               v-model="form.date1"
					               show-time
					               type="date"
					               placeholder="Pick a date"
					               style="width: 100%;"
					             />
					           </a-form-model-item>
					           <a-form-model-item label="Instant delivery" prop="delivery">
					             <a-switch v-model="form.delivery" />
					           </a-form-model-item>
					           <a-form-model-item label="Activity type" prop="type">
					             <a-checkbox-group v-model="form.type">
					               <a-checkbox value="1" name="type">
					                 Online
					               </a-checkbox>
					               <a-checkbox value="2" name="type">
					                 Promotion
					               </a-checkbox>
					               <a-checkbox value="3" name="type">
					                 Offline
					               </a-checkbox>
					             </a-checkbox-group>
					           </a-form-model-item>
					           <a-form-model-item label="Resources" prop="resource">
					             <a-radio-group v-model="form.resource">
					               <a-radio value="1">
					                 Sponsor
					               </a-radio>
					               <a-radio value="2">
					                 Venue
					               </a-radio>
					             </a-radio-group>
					           </a-form-model-item>
					           <a-form-model-item label="Activity form" prop="desc">
					             <a-input v-model="form.desc" type="textarea" />
					           </a-form-model-item>
					          
					         </a-form-model>
					     </a-modal>
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
		visible: false,
		confirmLoading: false,
		labelCol: { span: 4 },
		      wrapperCol: { span: 14 },
		      other: '',
		      form: {
		        name: '',
		        region: undefined,
		        date1: undefined,
		        delivery: false,
		        type: [],
		        resource: '',
		        desc: '',
		      },
		      rules: {
		        name: [
		          { required: true, message: 'Please input Activity name', trigger: 'blur' },
		          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
		        ],
		        region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
		        date1: [{ required: true, message: 'Please pick a date', trigger: 'change' }],
		        type: [
		          {
		            type: 'array',
		            required: true,
		            message: 'Please select at least one activity type',
		            trigger: 'change',
		          },
		        ],
		        resource: [
		          { required: true, message: 'Please select activity resource', trigger: 'change' },
		        ],
		        desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
		      },
		    };
  },
  created(){
    
  },
  methods:{
	 logout(){
		 window.sessionStorage.clear()
		 this.$router.push('/login')
	 },
	 showModal() {
	       this.visible = true;
	     },
	     handleOk(e) {
	       this.ModalText = 'The modal will be closed after two seconds';
	       this.confirmLoading = true;
	       setTimeout(() => {
	         this.visible = false;
	         this.confirmLoading = false;
	       }, 2000);
	     },
	     handleCancel(e) {
	       console.log('Clicked cancel button');
	       this.visible = false;
	     },
  }
}
</script>
<style>
.main{
	height: 100vh;
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