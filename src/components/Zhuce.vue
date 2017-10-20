<template>
<div id="zhuce">
	<div class="zhuce-1">
		<a href="#/denglu"><i class="iconfont" >&#xe63d;</i></a>
		<div>快速注册</div>
	</div>
	<div class="zhuce-2">
		<ul>
			<li><a class="a-left1">账号密码登录</a></li>
			<li><a class="a-right1">手机验证码登录</a></li>
		</ul>
	</div>
	<div class="login-mine1">
		<div class="userw1">
			<span>用户名</span>
			<div class="userw-11"><input type="text" id="userid" placeholder="请输入用户名" name='user' v-model='user'></div>
		</div>
		<div class="passw1">
			<span>密码</span>
			<div class="passw-11"><input type="text" id="passwords" placeholder="请输入6-12位易购密码" name='pw' v-model='pw'></div>
		</div>
    <div class="passw-12">
      <span>再一次</span>
      <div class="passw-12"><input type="text" id="passwords" placeholder="请再次输入6-12位易购密码" name='morepw' v-model='morepw'></div>
    </div>
	</div>
	<div class="buttona1">
		<a class="buttons1" @click='reg'>注册</a>
	</div>
</div>
</template>
<script>
import axios from 'axios'
	export default{
		name:'zhuce',
    data:function(){
      return{
        morepw:'',
        user:'',
        pw:''
      }
    },
    methods:{
      reg:function(){
        var that =  this;
        if(that.morepw == that.pw){
            axios.post('/lors/reg',{
            user:that.user,
            pw:that.pw})
            .then(function(res){
              console.log(res);
            if(res.data.success==true){
                  location.href='http://localhost:8080/#/denglu';
            }else{
          
            }
    })
        .catch(function(err){
        console.log(err);
    })
        }else{

        }
 
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
        .zhuce-1{
      		width:100%;
	    height:1.172812rem;
	    position: relative;
	    background: #fff;
	    line-height: 1.172812rem;
	    border-bottom: 1px solid #DCDCDC;

      	}
      	.zhuce-1 a{
      		float: left;
      		display: block;
			width:1.499375rem;
			height:1.172812rem;
			text-align: center;
      text-decoration:none;
      	}
      	.zhuce-1 div{
      		float: left;
      		width:5.625rem;
      		height:1.172812rem;
   			margin-left: 0.7rem;
   			font-size: 16px;
   			text-align: center;
      	}
      	.zhuce-2{
      		height:1.301875rem;
      	}
      	.zhuce-2 li{
      		list-style: none;
      		float: left;
			width:5rem;
			height:1.301875rem;
      	}
      	.zhuce-2 a{
      		display: block;
      		height:1.301875rem;
			line-height: 1.301875rem;
			text-align: center;
			font-size: 14px;
      	}
      	.login-mine1{
      		padding: 2rem .56rem 0;
      		height:2.399375rem;
      	}
      	.userw1{border-bottom: 1px solid #ccc;
      		height:1.199687rem;
      		width:9rem;
      	}

      	.userw1 span,.passw1 span,.passw-12 span{
      		float: left;
      		width:1.333125rem;
      		height:1.168437rem;
      		line-height: 1.168437rem;
      		text-align: center;
      		font-size: 12px;
      	}
      	.passw1,.passw-12{border-bottom: 1px solid #ccc;
      		height:1.199687rem;
      		width:9rem;
      	}
      	.userw1 div,.passw1 div,.passw-12 div{
      		width:7.254375rem;
      		height:1.168437rem;
      		float: left;
      		margin-left:0.3rem;
      	}
      	.userw1 input,.passw1 input,.passw-12 input{
      		width:7.254375rem;
      		height:1.168437rem;
      		border:none;
      		background: #fff;
          zoom:1;
    outline: medium;
      	}
      	.buttons1{
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
      	.buttona1{
      		width:3.361875rem;
      		margin-top: 2.5rem;
      		padding: 0 .4rem;
      	}
</style>
