<script>
    export default{
        name: "CreateNote",
        props:['notes'],
        data(){
            return{
                note: false,
                noteTitle: '',
                noteBody: ''
            }
        },
        methods:{
            showNote(){
                this.note = true;
            },
            hideNote(){
                this.note = false;
            },
            createNote(){
                let title = this.noteTitle;
                let body = this.noteBody;
                this.noteTitle = '';
                this.noteBody = '';
                let noteId = Date.now();
                let newNote = {
                    id: noteId,
                    title: title,
                    body: body
                };
                this.notes.push(newNote);
                this.hideNote();
            }
        }

    }
</script>

<template>
    <div class="post-create">
        <button type="button" class="create-post" :class="{'hide-note':note, 'show-note':!note}" @click="showNote">
            Create Post
            <i class="bi bi-plus"></i>
        </button>
        <div class="note-input" :class="{'show-note':note, 'hide-note':!note}">
            <input type="text" name="note-title" id="" class="note-input__title" placeholder="Title" v-model="noteTitle">
            <textarea name="note-body" id="" cols="30" rows="10" class="note-input__body" v-model="noteBody">Take a note</textarea>
            <div class="note-input__actions">
                <button class="submit-btn" type="button" @click="createNote">Done</button>
            </div>
        </div>
    </div>
    
</template>

<style>
    .post-create{
        --nav-color: #272932;
        padding: 1rem 2rem; 
        position: relative;
        display: flex;
        justify-content: center;
    }
    .post-create .create-post{
        border: none;
        outline: none;
        background: var(--nav-color);
        color: #fff;
        padding: 0.5rem 0.85rem;
        border-radius: 8px;
        font-size: 1.1rem;
        min-width: 100%;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-right: auto;
    }
    .post-create .create-post i{
        font-size: 1.75rem;
    }
    .post-create .note-input{
        background-color: var(--nav-color);
        margin-top: 10px;
        padding: 1rem; 
        flex-direction: column;
        gap: 10px;
        align-items: center;
        border-radius: 8px;
        min-width: 100%;
    }
    .show-note{
        display: flex;
    }
    .hide-note{
        display: none
    }
    .post-create .note-input__title,
    .post-create .note-input__body{
        min-width: 100%;
        padding: 0.5rem;
        font-size: 1.1rem;
        border-radius: 8px;
    }
    .post-create .note-input__actions{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .post-create .note-input__actions button{
        padding: 0.5rem;
        font-size: 1.1rem;
    }

    @media screen and (min-width: 768px){
        .post-create .note-input{
            min-width: 500px;
        } 
        .post-create .create-post{
            min-width: 100px;
        }
    }

</style>