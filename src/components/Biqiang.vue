<template>
<div id="biqiang">
	<div class="biqiang-1">
		<a href="#/"><i class="iconfont">&#xe63d;</i></a>
		<div></div>
	</div>
	<div class="biqiang-2">
		<ul>
			<li>精选</li>
			<li>置家生活</li>
			<li>潮玩3C</li>
			<li>超市日用</li>
			<li>型男靓女</li>
			<li>辣妈育儿</li>
		</ul>
	</div>
	<div class="biqiang-3">
		 <mt-swipe :auto="4000" >
            <mt-swipe-item v-for="item in list"><img :src="item.tup" style="width:100%"></mt-swipe-item>
        </mt-swipe>
	</div>
	<div class="div-div" v-for="ite in lis" >
		<div class="div-b1" >{{ite.title}}</div>
		<ul class="div-ul1">
			<li v-for="sub in ite.img">
        <img  :src="sub" />
      <div class="div-ul2" v-for="cc in ite.num">
        {{cc}}
      </div>

      </li>
			
		</ul>
		<div class="div-ul3" >{{ite.tit}}</div>
	</div>
</div>
</template>
<script>
import axios from 'axios';
	export default{
		name:'biqiang',
		data:function(){
    	return{
     	list:[],
	lis:{}
    }
  },
  mounted:function(){
  	var that = this;
    axios.get('/static/lunbo.json')
    .then(function(res){
      that.list=res.data;
    })
    .catch(function(){
      console.log("chucuole");
    })
    axios.get('/static/biqiang.json')
    .then(function(res){
      that.lis=res.data;
      console.log(res)
    })
    .catch(function(){
      console.log("chucuole");
    })
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
      	.biqiang-1{
      		width:100%;
	    height:1.172812rem;
	    position: relative;
	    background: #fff;
	    line-height: 1.172812rem;
	    border-bottom: 1px solid #DCDCDC;

      	}
      	.biqiang-1 a{
      		float: left;
      		display: block;
			width:1.499375rem;
			height:1.172812rem;
			text-align: center;

      	}
      	.biqiang-1 div{
      		float: left;
      		background-color: red;
      		width:5.625rem;
      		height:1.172812rem;
   			margin-left: 0.7rem;
   			background: url(/static/image/bg-2.png);
      	}
      	.biqiang-2{
      		height:1.066562rem;
			overflow: hidden;
      	}
      	.biqiang-2 ul{
		
		/*width:100%;
		height:100%;*/
      	white-space: nowrap;
      	overflow-x:auto;
		 display: inline;   
      	}
      	.biqiang-2 ul li{
      		display: inline-block;
      		list-style: none;
      		float: left;
      		height:1.066562rem;
      		width:1.999375rem;
      		line-height: 1.066562rem;
      		text-align: center;
			background-color: #cc2c2e;
			font-size: 14px;
			color:#fff;
      	}
      	.biqiang-3 {
      		height:3.999062rem;
      	}
      	.div-div{
		    display: block;
		    padding: 0.2rem;
		    background: #FFF;
		    z-index: 55;
		    margin-bottom: .18rem;
		    position: relative;
		    width: ;
		    height: 5.992187rem;
      	}
      	.div-b1{
		    display: -webkit-box;
		    text-overflow: ellipsis;
		    -webkit-line-clamp: 1;
		    -webkit-box-orient: vertical;
		    white-space: normal;
		    overflow: hidden;
		    line-height: .76rem;
		    margin-bottom: .2rem;
		    padding-top: .34rem;
        font-size: 14px;
        font-weight: 700;
      	}
      	.div-ul1 {
      		overflow: hidden;
   			padding-top: .3rem;
   			padding-bottom: .4rem;
      	}
      	.div-ul1 li{
      		position: relative;
          float: left;
          margin-right: .1rem;
          overflow: hidden;
          width: 3.065937rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          height:3.784687rem;
      	}
      	.div-ul1 li img{
      		width:3.065937rem;
      		height:3.065937rem;
      	}
      	.div-ul2{
      		left: 0;
    		width: 100%;
    		line-height: 0.72rem;
    		color: #fa4b4b;
      	}
      	.div-ul3{
      		height:0.5625rem;
      	}
</style>
