<script>
    import NotesCard from "./NotesCard.vue"
    export default{
        props: ['notes','favorites'],
        components: {NotesCard},
        name: "NotesContainer",
    }
</script>
<template>
    <ul class="notes-grid">
        <li class="notes-grid__item" v-for="(note,index) in notes" :key="index">
            <NotesCard v-if="note.title !== '' && note.body !== ''" 
                    :title="note.title" 
                    :body="note.body" 
                    :notes="notes"
                    :favorites="favorites" 
                    :id="note.id" />
        </li>
    </ul>
</template>

<style>
    .notes-grid{
        padding: 1rem 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
        gap: 2rem;
        list-style-type: none;
    }
</style>