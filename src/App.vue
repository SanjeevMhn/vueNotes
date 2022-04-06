<script>
	import Navbar from './components/Navbar.vue';
	export default{
		components:{
			Navbar
		},
		data(){
			return{
				title: "Vue Notes"
			}
		}
	}
</script>
<template>
	<Navbar/>
</template>

<style>
	*,
	*::before,
	*::after{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
</style>