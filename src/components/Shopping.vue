<template>
<div id="shopping">
	<div class="shopping-1">
		<a href="#/"><i class="iconfont">&#xe63d;</i></a>
		<div>购物车</div>
	</div>
	<div class="shopping-2">
		<a class="shopping-3" href="#/zhuce">快速注册>></a>
	</div>
</div>
</template>
<script>
	export default{
		name:'shopping'
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
        .shopping-1{
      		width:100%;
	    height:1.172812rem;
	    position: relative;
	    background: #fff;
	    line-height: 1.172812rem;
	    border-bottom: 1px solid #DCDCDC;

      	}
      	.shopping-1 a{
      		float: left;
      		display: block;
			width:1.499375rem;
			height:1.172812rem;
			text-align: center;
      text-decoration:none;

      	}
      	.shopping-1 div{
      		float: left;
      		width:5.625rem;
      		height:1.172812rem;
   			margin-left: 0.7rem;
   			font-size: 16px;
   			text-align: center;
      	}
      	{

      	}
      	.shopping-2{
		    display: block;
		    width: 3rem;
		    height: 1.066562rem;
		    text-align: center;
		    line-height: 1.066562rem;
		    
		    border-radius: .16rem;
		   margin:0 auto;
		    color: orange;  
      	}
      	.shopping-3{

      		width:100%;
      		margin-top: 1.2rem;
      		
      	}
</style>
