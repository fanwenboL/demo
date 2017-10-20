<template>
<div id="denglu">
	<div class="denglu-1">
		<a href="#/"><i class="iconfont">&#xe63d;</i></a>
		<div>登录</div>
	</div>
	<div class="denglu-2">
		<ul>
			<li><a class="a-left">账号密码登录</a></li>
			<li><a class="a-right">手机验证码登录</a></li>
		</ul>
	</div>
	<div class="login-mine">
		<div class="userw">
			<span>账户</span>
			<div class="userw-1"><input type="text" id="username" placeholder="请输入用户名" v-model='user'></div>
		</div>
		<div class="passw">
			<span>密码</span>
			<div class="passw-1"><input type="text" id="password" placeholder="请输入6-12位易购密码" v-model='pw'></div>
		</div>
	</div>
	<div class="buttona">
		<a class="buttons" @click='denglus()'>登录</a>
	</div>
	<div class="buttona2">
		<a class="buttons2" href="#/zhuce">快速注册>></a>
	</div>
</div>
</template>
<script>
import axios from 'axios'
	export default{
		name:'denglu',
    data:function(){
      return{
        user:'',
        pw:''
      }
    },
    methods:{
      denglus:function(){
        var that = this;
        axios.post('/lors',{
        user:that.user,
        pw:that.pw})
        .then(function(res){
        if(res.data.success==true){
          that.isenter = false;

        }else{
          that.isenter = true;
        }
    })
        .catch(function(err){
        console.log(err);
    })

      }
    }
	}
</script>
<style>
		*{
        margin:0;
        padding: 0;
      	 }
      	 @font-face {font-family: "iconfont";
          src: url('/static/font2/iconfont.eot'); /* IE9*/
          src: url('/static/font2/iconfont.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('/static/font2/iconfont.woff') format('woff'), /* chrome, firefox */
          url('/static/font2/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
          url('/static/font2/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
        }

        .iconfont {
          font-family:"iconfont" !important;
          font-size:16px;
          font-style:normal;
          -webkit-font-smoothing: antialiased;
          -webkit-text-stroke-width: 0.2px;
          -moz-osx-font-smoothing: grayscale;
        }
        .denglu-1{
      		width:100%;
	    height:1.172812rem;
	    position: relative;
	    background: #fff;
	    line-height: 1.172812rem;
	    border-bottom: 1px solid #DCDCDC;

      	}
      	.denglu-1 a{
      		float: left;
      		display: block;
			width:1.499375rem;
			height:1.172812rem;
			text-align: center;
      text-decoration:none;

      	}
      	.denglu-1 div{
      		float: left;
      		width:5.625rem;
      		height:1.172812rem;
   			margin-left: 0.7rem;
   			font-size: 16px;
   			text-align: center;
      	}
      	.denglu-2{
      		height:1.301875rem;
      	}
      	.denglu-2 li{
      		list-style: none;
      		float: left;
			width:5rem;
			height:1.301875rem;
      	}
      	.denglu-2 a{
      		display: block;
      		height:1.301875rem;
			line-height: 1.301875rem;
			text-align: center;
			font-size: 14px;
      	}
      	.login-mine{
      		padding: 2rem .56rem 0;
      		height:2.399375rem;
      	}
      	.userw{border-bottom: 1px solid #ccc;
      		height:1.199687rem;
      		width:9rem;
      	}
      	.userw span,.passw span{
      		float: left;
      		width:1.333125rem;
      		height:1.168437rem;
      		line-height: 1.168437rem;
      		text-align: center;
      		font-size: 14px;
      	}
      	.passw{border-bottom: 1px solid #ccc;
      		height:1.199687rem;
      		width:9rem;
      	}
      	.userw div,.passw div{
      		width:7.254375rem;
      		height:1.168437rem;
      		float: left;
      		margin-left:0.3rem;
      	}
      	.userw input,.passw input{
      		width:7.254375rem;
      		height:1.168437rem;
      		border:none;
      		background: #fff;
      	}
      	.buttons{
		    display: block;
		    width: 9.251562rem;
		    height: 1.066562rem;
		    text-align: center;
		    line-height: 1.066562rem;
		    margin: 0 auto;
		    border-radius: .16rem;
		    background-color: orange;
		    color: #fff;  
      	}
      	.buttona{
      		width:3.361875rem;
      		margin-top: 1.2rem;
      		padding: 0 .4rem;
      	}
      	.buttons2{
		    display: block;
		    width: 3rem;
		    height: 1.066562rem;
		    text-align: center;
		    line-height: 1.066562rem;
		    
		    border-radius: .16rem;
		   margin:0 auto;
		    color: orange;  
      	}
      	.buttona2{

      		width:100%;
      		margin-top: 1.2rem;
      		
      	}
</style>
