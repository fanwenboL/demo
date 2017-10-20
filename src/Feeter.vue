<template>
<div>
	<footer>
		<ul>
			<li>
				<router-link to="/">
				<img src="http://image2.suning.cn/uimg/cms/img/150115446803451639.png?from=mobile&16">
				<span>猜你喜欢</span>
				</router-link>
			</li>
			<li>
				<router-link to="fenlei">
				<img src="http://image1.suning.cn/uimg/cms/img/149804285027181893.png?from=mobile&16">
				<span>分类</span>
				</router-link>
			</li>
			<li>
				<router-link to="biqiang">
				<img src="http://image3.suning.cn/uimg/cms/img/149542396539322161.png?from=mobile&16">
				<span>必抢清单</span>
				</router-link>
			</li>
			<li>
				<router-link to="shopping">
				<img src="http://image4.suning.cn/uimg/cms/img/149916145707908251.png?from=mobile&16">
				<span>购物车</span>
				</router-link>
			</li>
			<li>
				<router-link to="denglu">
				<img src="http://image4.suning.cn/uimg/cms/img/149916132444173312.png?from=mobile&16">
				<span>我的易购</span>
				</router-link>
			</li>
		</ul>
	</footer>
</div>
</template>
<script>
import axios from 'axios';
	export default{
		name:'feeter',
		 data:function(){
    return{
      list:[]
    }
  },
  mounted:function(){
  	var that = this;
    axios.get('/static/footers.json')
    .then(function(res){
      
      that.list=res.data;
     
    })
    .catch(function(){
      console.log("chucuole");
    })
  }
	}
</script>
<style>
	a{
		text-decoration:none;
		color:#000;
	}
	footer{
		position:fixed;
		bottom: 0;
		background-color: #fff;
		height: 1.999375rem;
		width:100%;
	}
	footer ul li{
		list-style: none;
		float: left;
		
		height:1.999375rem;
		width:20%;
	}
	footer ul li img{
		width:0.75rem;
		height:0.75rem;
		text-align: center;
   		display: block;
   		margin: 0 auto;
   		margin-top: 0.3rem;
	}
	footer ul li span{
		display: block;
		height:0.5625rem;
		text-align: center;
		margin-top: 0.225rem;
	}
</style>