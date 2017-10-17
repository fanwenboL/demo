<template>
  <div class="hello">
  <meta name="viewport" content="initial-scale=1,maximum-scale=1, minimum-scale=1">
    	<header>
			<ul>
				<li><i class="iconfont">&#xe630;</i><span>分类</span></li>
				<li><input type="text" placeholder="生活家电0元购"></li>
				<li><img /></li>
			</ul>
		</header>

</div>

</template>
<script type="text/javascript" src="/static/flexible.js"></script>
<script>
export default {
  name: 'heard',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		* {
				margin: 0;
				padding: 0;
			}
			@font-face {font-family: "iconfont";
          src: url('/static/font/iconfont.eot'); /* IE9*/
          src: url('/static/font/iconfont.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('/static/font/iconfont.woff') format('woff'), /* chrome, firefox */
          url('/static/font/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
          url('/static/font/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
        }

        .iconfont {
        	margin-top: 0.40625rem;
          font-family:"iconfont" !important;
          font-size:16px;
          font-style:normal;
          -webkit-font-smoothing: antialiased;
          -webkit-text-stroke-width: 0.2px;
          -moz-osx-font-smoothing: grayscale;
        }
			
			header {
				height: 1.1875rem;
				background-color: transparent;
				overflow: hidden;
			}
			
			header ul {
				height: 1.1875rem;
				list-style: none;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			
			
			
			header ul li:nth-child(1) {
				width: 1.25rem;
				height: 1.1875rem;
				text-align: center;
				line-height: 0.59375rem;
			}
			header ul li:nth-child(1) span{
				display: block;
			}
			header ul li:nth-child(2){
				width:7.5rem;
				height: 1.1875rem;
				line-height:1.1875rem;
				align-items: center;
				text-align: center;
			}
			header ul li:nth-child(2) input{
				box-sizing: border-box;
				border:1px solid #000;
				width:5.625rem;
				
				height:0.78125rem;
				border-radius:0.78125rem;
				padding-left: 0.625rem;
				
			}
			header ul li:nth-child(3) {
				width: 1.25rem;
				height: 1.1875rem;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			
			header img {
				display: block;
				width: 2.375rem;
				height: 0.805555rem;
			}
			
</style>

