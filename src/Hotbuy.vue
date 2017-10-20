<template>
<nav>
	<div class="nav">
		<a href="#" class="nav-1">
		
		<img src="/static/image/icon-1.png">
		<span class="s-icon"></span>
		<p class="p-1">每日早上9:00上新</p>
		<p class="p-2">查看更多</p>
		</a> 
	</div>
	<div class="nav-2">
		<a class="nav-a-1">
			<p>鸭鸭</p>
			<img src="/static/image/p-1.jpg">
			<span>1.2折</span>
		</a>
		<a class="nav-a-2">
			<p>节修斯</p>
			<img src="/static/image/p-2.jpg">
			<span>1.7折</span>
		</a>
	</div>
</nav>
</template>
<script>
	export default{
		name:'hotbuy'
	}
</script>
<style>
	
	.nav{
		
		height: 4.21875rem;
		background:url('/static/image/bg-1.jpg');
		background-size: 100% 4.21875rem;
	}

	.nav-1{
		display: block;
		height:0.74125rem;
		text-decoration: none;
		color:#222;
	}
	.nav-1 img{
		float: left;
		margin-left: 0.46875rem;
		height:0.42625rem;
		width:1.732812rem;
		line-height: 0.42625rem;
		margin-top: 0.15625rem;
	}
	.s-icon{
		float: left;
	
    width: .12rem;
    height: .12rem;
    border-radius: 50%;
    background: #222;
	
	margin:0.24rem 0.2rem;
	}
	.p-1{
	float: left;
  	height:0.74125rem;
  	line-height: 0.74125rem;
    display: inline-block;
	}
	.p-2{
		float: right;
		margin-right: 0.3rem;
		height:0.74125rem;
  	line-height: 0.74125rem;
	}
	.nav-2{
		width:5.225625rem;
		height:3.199375rem;
	
		position: absolute;
		left: 4.375rem;
		top:10.09375rem;
	}
	.nav-a-1{
		
		float: left;
		width:2.399375rem;
		height:3.199375rem;
		
		    margin-left: 0.213437rem;
	}
	.nav-a-2{
		float: left;
		width:2.399375rem;
		height:3.199375rem;
		
		    margin-left: 0.213437rem;
	}
	.nav-a-1 p,.nav-a-2 p{
		   text-align: center;
    
    margin: .2rem auto 0;
    width: 1.99625rem;
    height:  0.586562rem;
   
    font-weight: bold;
	}
	.nav-a-1 img,.nav-a-2 img{
	display: block;
    width: 1.86625rem;
    height: 1.86625rem;
    margin: 0 auto;
	}
	.nav-a-1 span,.nav-a-2 span{
	display:block;
    height:0.42625rem;
    margin-top:0.15625rem 0;
    color: #FFF;
    background: #e52e2a;
    width:1.333125rem;
    
    line-height: 0.42625rem;
    border-radius: .32rem;
	text-align: center;
	margin-left:0.625rem;
    }
</style>