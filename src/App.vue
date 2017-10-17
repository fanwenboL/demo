<template>
 
  <div id="app" >
      <!-- <mt-swipe :show-indicators="false"> -->
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
    <div class="div1">
        <mt-swipe :auto="4000" >
            <mt-swipe-item v-for="item in list"><img :src="item.img" style="width:100%"></mt-swipe-item>
        </mt-swipe>

    </div>
	<cccccc></cccccc>
	
    
</div>
     
</template>
<script type="text/javascript" src="/static/flexible.js"></script>
<script type="text/javascript" src="/static/nebu.js"></script>
<script scoped>
import axios from 'axios';
import Vue from 'vue'
export default {
  name: 'app',
  data:function(){
    return{
      list:[]
    }
  },
  mounted:function(){
  	var that = this;
    axios.get('/static/address.json')
    .then(function(res){
      console.log(res);
      that.list=res.data;
     
    })
    .catch(function(){
      console.log("chucuole");
    })
  }
}
</script>
  
<style>
		
		*{
				margin: 0;
				height:0;
			}
		#app .div1{
			height:4.59375rem;
			width:100%;
			margin-top:1.1875rem;;
			
		}
		#app .div1 img{
			height:100%;
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
				padding-left: 0;
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
				justify-content: space-between;
				align-items: center;
				display: flex;
				
			}
			
			header img {
				border: none;
				display: block;
				width:0.53125rem;
				height: 0.71875rem;
				background: url(data:image/png;base64,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)  ;
				background-size: 0.53125rem 0.71875rem;
			}

			section{
				height: 4.09375rem;
				background-color: #000;
			}
			section ul li{
				width: 20%;
   				display: block;
			    float: left;
			    margin-bottom: .2rem;
			}
			section ul li a {
				display: block;
			}
			section ul li img {
			    width: 1.45rem;
			    height: 1.45rem;
}
</style>
