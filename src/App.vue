<script>
	//TODO: add search feature//
	//TODO: add routing feature//
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
		},
		methods:{
			updateNotes(value){
				this.searchText = value;
			}
		}
	}
</script>
<template>
	<Navbar :favorites=favorites @inputData="updateNotes" />
	<CreateNote :notes=notes />
	<NotesContainer :notes=notes :favorites=favorites :searchText=searchText  />
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