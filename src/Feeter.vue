<template>
<div>
	<footer>
		<ul>
			<li v-for="lis in list">
				<img :src="lis.tup">
				<span>{{lis.name}}</span>
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
	footer{
		position:fixed;
		bottom: 0;
		
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