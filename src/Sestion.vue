<template>
	<section>
		<ul>
			<li v-for="lis in list">
			<a href="#">
				<img :src="lis.tup" />
				<div>{{lis.name}}</div>
			</a> 
			</li>
		</ul>
	</section>


</template>
<script>
import axios from 'axios';
	export default {
  name: 'sestion',
  data:function(){
    return{
      list:[]
    }
  },
  mounted:function(){
  	var that = this;
    axios.get('/static/caidan.json')
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
	section{
		height:4.28125rem;
		width:100%;
		margin-top:0.2rem;
	}
	section ul{
		padding-left: 0;
	}
	section ul li{
		width: 20%;
	    display: block;
	    float: left;
	    margin-bottom: .2rem;
	    height: 2.14064rem;
	}
	section ul li img{
	width: 0.96625rem;
    height:0.96625rem;
    text-align: center;
    display: block;
    margin: 0 auto;
	}
	
	section ul li div{
	
    height:0.875rem;
    text-align: center;
     display: block;
     line-height: 0.875rem;
	}
	section ul li a{
		display: block;
		 height: 2.14064rem;
		 width:100%;
		 text-decoration: none;
	}
</style>