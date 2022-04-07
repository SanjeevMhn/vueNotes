<script>
	//TODO: added search feature//
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
				searchText: "",
			}
		}
	}
</script>
<template>
	<Navbar :favorites=favorites :searchText=searchText />
	<CreateNote :notes=notes />
	<NotesContainer :notes=notes :favorites=favorites :searchText=searchText />
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