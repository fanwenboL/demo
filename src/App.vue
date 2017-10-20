<template>
 
  <div id="app">
      <!-- <mt-swipe :show-indicators="false"> -->
     
	<!-- <div id="hui"></div>
	
    <div id="hui_1"></div> -->
	
	<router-view/>
</div>
     
</template>
<script type="text/javascript" src="/static/flexible.js"></script>
<script>
export default{
		name:'app'
	}
</script>
  
<style>
		body,html,#app{
			height:100%;
			overflow: auto;
		}
			/*#hui{
				height:0.3rem;
				width:100%;
				background-color: #f2f2f2;
			}
			#hui_1{
				height:0.3rem;
				width:100%;
				background-color: #f2f2f2;
				margin-top:14.21875rem;
			}*/
			
</style>
