<template>

<div class="div1">
        <mt-swipe :auto="4000" >
            <mt-swipe-item v-for="item in list"><img :src="item.img" style="width:100%"></mt-swipe-item>
        </mt-swipe>

    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'swp',
  data:function(){
    return{
      list:[]
    }
  },
  mounted:function(){
  	var that = this;
    axios.get('/static/address.json')
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
	.div1{
			height:4.59375rem;
			width:100%;
			
		}
	.div1 img{
			height:100%;
		}
	
</style>