<script>
    import NotesCard from "./NotesCard.vue"
    export default{
        props: ['notes','favorites','searchText'],
        components: {NotesCard},
        name: "NotesContainer",
        data(){
            return{
                results: [],
                searchTxt: this.searchText
            }
        },
        methods:{
            getNotes(){
                this.results = this.notes.filter((note,index)=>{
                    return note.title.toLowerCase() === this.searchText.toLowerCase();
                })[0];
                console.log(this.results);
            }
        },
        mounted(){
            this.getNotes();
            console.log(this.results);
        },
        // watch:{
        //     searchText(){
        //         this.getNotes();
        //     }
        // }
    }
</script>
<template>
    <div class="notes-container">
        
        <ul class="live-search-wrapper" v-if="results">
            <li class="notes-grid__item" v-for="(res,index) in results" :key="index">
                <NotesCard :id="res.id" 
                            :title="res.title" 
                            :body="res.body" 
                            :favorites="favorites" />
            </li>
        </ul>
        <ul class="normal-wrapper" v-else>
            <li class="notes-grid__item" v-for="(note,index) in notes" :key="index">
                <NotesCard v-if="note.title !== '' && note.body !== ''" 
                        :title="note.title" 
                        :body="note.body" 
                        :notes="notes"
                        :favorites="favorites" 
                        :id="note.id" />
            </li>
        </ul>
    </div>
</template>

<style>
    .notes-container{
        padding: 1rem 2rem;
        
    }
    .notes-container .normal-wrapper,
    .notes-container .live-search-wrapper{
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
        gap: 2rem;
        list-style-type: none;
    }
</style>