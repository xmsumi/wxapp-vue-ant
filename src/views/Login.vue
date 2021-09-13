<template>
	<div class="main">
			<a-row class="login-bar vertical" type="flex" justify="space-around" align="middle">
				<a-col class="login-box">
					<img src="@/assets/logo.png" width="60">
					<h1 style="padding: 10px 0px 20px;"><strong>呜噜数据管理中心</strong></h1>
				
			<a-form :model="loginform" id="components-form-demo-normal-login"  class="login-form">
			    <a-form-item>
			      <a-input size="large" v-model:value="loginform.phone" placeholder="手机号码">
			         <a-icon slot="prefix" type="phone" style="color: rgba(0,0,0,.25)" />
			      </a-input>
			    </a-form-item>
			    <a-form-item>
			      <a-input size="large" v-model:value="loginform.password" type="password" placeholder="密码">
			        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
			      </a-input>
			    </a-form-item>
			    <a-form-item>
			      <a-button size="large" type="primary" class="login-form-button" html-type="submit" @click="login()" :disabled="loginform.user === '' || loginform.password === ''"  >
			        登录
			      </a-button>
			    </a-form-item>
			  </a-form>
			  </a-col>
			</a-row>
		</div>
</template>


<script>
	export default{
		data(){
			return{
				loginform:{
					phone:'',
					password:''
				}
			}
		},
		created(){
			// this.login()
		},
		methods:{
			async login(){
				
				await this.$fetch.post('/Member/checkLogin').then(res => {
					this.$message.success(res.message)
					//存入session
					window.sessionStorage.setItem('token',res.token)
					this.$router.push('/')
					
				}).catch(error => {
					this.$message.error(error.message)
				});
				
				
			}
		}
		
		
	}

</script>

<style>
	body{
		background-color: aliceblue;
	}
	.vertical, .verticalCen {
	    display: box;
	    display: -webkit-box;
	    -webkit-box-pack: center;
	    box-pack: center;
	    -webkit-box-orient: vertical;
	    box-orient: vertical;
		vertical-align: middle;
	}
	.login-bar {
	    height:100vh
	}
	.login-box {
	    width:400px;
	    margin:auto;
	    text-align:center;
	    background-color:#fff;
	    padding:30px 40px 50px 40px;
	    border-radius:4px;
	    box-shadow:0 10px 20px rgba(0, 0, 0, .05)
	}
	.login-form {
	  max-width: 300px;
	}
	.login-form-forgot {
	  float: right;
	}
	.login-form-button {
	  width: 100%;
	}
</style>