<template>
<div id="fenlei">
	<div class="search">
		<span><router-link to="/"><i class="iconfont">&#xe63d;</i></router-link></span>
		<div class="search-a">
			<a class="search-a1"></a>
			<a class="search-a2"></a>
		</div>
	</div>
	<div id="ul-all">
		<div class="ul-left">
			<ul>
				<li><router-link to="/fenlei/remen">热门推荐</router-link></li>
				<li>海外购</li>
				<li>手机相机</li>
				<li>大家电</li>
				<li>电脑办公</li>
				<li>厨卫电器</li>
				<li>食品酒水</li>
				<li>奶粉尿裤</li>
				<li>居家生活</li>
				<li>生活电器</li>
				<li>厨房电器</li>
				<li>个护健康</li>
				<li>烹饪出具</li>
				<li>男装女装</li>
				<li>内衣配饰</li>
				<li>内衣配饰</li>
				<li>内衣配饰</li>
				<li>内衣配饰</li>
			</ul>
		</div>
		<div class="ul-right">
			<router-view />
		</div>
	</div>
</div>
</template>
<script>
	export default{
		name:'fenlei'
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
	.search{
		height:1.172812rem;
		width:100%;
		line-height:1.172812rem; 
		background-color: #f4f4f4;
		border-bottom: #ccc 1px solid;
		box-sizing: border-box;
	}
	.search-a{
		margin-top: 0.2rem;
		float: left;
		height:0.799687rem;
		width:8.599687rem;
		display: inline-block;
		border:1px solid #e5e5e5;
		border-radius: 0.16875rem;
	}
	.search span{
		float: left;
		display: block;
		height:1.172812rem;
		line-height: 1.172812rem;
		width:1.09375rem;
		text-align: center;
	}
	.search-a1{
		margin:0.2375rem;
		
		width:0.299687rem;
		height:0.299687rem;
		display: block;
		
		border-right: none;
		border-radius:0.46875rem 0 0 0.46875rem;
		background: url(/static/image/search.png) no-repeat;
		background-size:100%;
	}
	.search-a2{
		width:7.817812rem;
		height:0.799687rem;
		
	}
	.ul-left{
		width:2.319687rem;
		height:100%;
		position: fixed;
    left: 0;
    top: 1.1725rem;
    overflow-y: auto;
    z-index: 50;
    background-color: #f4f4f4;
	}
	.ul-all{
		width:100%;
		height:100%;
	}
	.ul-left ul li{
		list-style: none;
		width:2.319687rem;
		height:1.252812rem;
		text-align: center;
		line-height: 1.252812rem;
		border-top:1px solid #e5e5e5;
		color:#5c5c5c;
	}
	.ul-right{
		position: fixed;
		left: 2.319687rem;
		top:1.172812rem;
		margin-left:2.319687rem; 
		margin:0.240312rem;
		width:7.199687rem;
		height:100rem;
	}
</style>
