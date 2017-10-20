<template>
<div id="remen">
	<div class="ccccc">

		<span class="ccc1">热门推荐</span>
		<span class="ccc2">品质推荐</span>
	</div>
	<ul>
		<li v-for="lis in list"><img :src="lis.tup" ><span>{{lis.name}}</span></li>
	</ul>
</div>
</template>
<script>
import axios from 'axios';

	export default{
		name:'remen',
		data:function(){
    	return{
     	list:[],
	
    }
  },
  mounted:function(){
  	var that = this;
    axios.get('/static/tupian.json')
    .then(function(res){
      that.list=res.data;
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
	#remen{
		
		/*position: fixed;
		left: 2.319687rem;
		top:1.172812rem;*/
		/*margin-left:2.319687rem; 
		margin:0.240312rem;*/
		width:7.199687rem;
		height:100rem;
		overflow: auto;
	}
	#remen ul{
		width:7.199687rem;
		height:1000rem;
		overflow: auto;
	}
	#remen ul li{
		list-style: none;
		float: left;
		width:2.37rem;
		height:2.34375rem;
		    margin: .3rem 0 0 0;
			}
	#remen ul li img{
		width:1.612187rem;
		height:1.612187rem;
		margin: 0 0.378906rem .2rem 0.378906rem;
   		position: relative;

	}	
	#remen ul li span{
		display: block;
	   
	    font-size: 12px;
	    height: 0.375rem;
	    line-height: 0.375rem;
	    text-align: center;
	    text-overflow: ellipsis;
	    
	    color: #666;
	    font-weight: normal;
	}
	.ccccc{
		font-weight: 700;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
		height:0.5625rem;
		    position: relative;
		    z-index: 333;
	}
	.ccc1{
		float: left;
		 position: relative;
		    z-index: 333;
	}
	.ccc2{
		float: right;
		 position: relative;
		    z-index: 333;
	}
	.ccccc::before{
		width: 100%;
    position: absolute;
    top: .25rem;
    left: 0;
    content: '';
    height: 1px;
    background: #f2f2f2;
	}

</style>
