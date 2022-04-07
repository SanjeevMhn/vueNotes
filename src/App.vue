<script>
	import Navbar from './components/Navbar.vue';
	import NotesContainer from './components/NotesContainer.vue';
	import CreateNote from './components/CreateNote.vue';
	export default{
		components:{
			Navbar,
			NotesContainer,
			CreateNote,
		},
		data(){
			return{
				title: "Vue Notes",
				notes: [],
				favorites: [],
			}
		}
	}
</script>
<template>
	<Navbar :favorites=favorites />
	<CreateNote :notes=notes />
	<NotesContainer :notes=notes :favorites=favorites />
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