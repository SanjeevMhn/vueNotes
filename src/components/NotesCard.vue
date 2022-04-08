<script>
    export default{
        props:['title','body','notes','id','favorites'],
        name: "NotesCard",
        data(){
            return{
                noteid: this.id
            }
        },
        methods:{
            deleteNote(id){
                let note = this.notes.find(note=>note.id===id);
                let favNote = this.favorites.find(fav=>fav.id==note.id);
                let noteIndex = this.notes.indexOf(note);
                let favNoteIndex = this.favorites.indexOf(favNote);
                this.notes.splice(noteIndex,1);
                this.favorites.splice(favNoteIndex,1);
            },
            checkFavorites(id){
                let check = this.favorites.filter(fav => fav.id === id)[0];
                console.log(check);
                if(check){
                    return true;
                }else{
                    return false;
                }
            },
            addToFavorites(id){
                let check = this.checkFavorites(id);
                if(!check){
                    let getNoteAdd = this.notes.find(note => note.id === id);
                    this.favorites.push(getNoteAdd);
                }else{
                    let getNoteRemove = this.notes.find(note => note.id === id);
                    let getIndex = this.favorites.indexOf(getNoteRemove);
                    this.favorites.splice(getIndex,1);
                }

            },
           
        }
    }
</script>

<template>
    <div class="note-card">
        <h2 class="note-card__title">
            {{title}}
        </h2>
        <p class="note-card__body">
            {{body}}
        </p>
        <div class="note-card__actions">
            <button class="action-favorite" type="button" @click="addToFavorites(noteid)">
                <i class="bi" :class="{'bi-heart-fill':checkFavorites(noteid),'bi-heart':!checkFavorites(noteid)}"></i>
            </button>
            <button class="action-delete" type="button" @click="deleteNote(noteid)">
                <i class="bi bi-trash"></i>
            </button>
        </div>
    </div>
</template>

<style>
    .note-card{
        --nav-color: #272932;
        padding: 1rem 2rem;
        min-height: 300px;
        color: #fff;
        background-color: var(--nav-color);
        font-family: 'Poppins',sans-serif;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
    }
    .note-card .note-card__title,
    .note-card .note-card__body{
        padding: 0;
        margin: 0;
        overflow-wrap: break-word;
    }
    .note-card__actions{
        margin-top: auto;
        margin-left: auto;
        display: flex;
        gap: 0.85rem;
    }
    .note-card__actions button{
        padding: 0;
        margin: 0;
        border: none;
        outline: none;
        background: var(--nav-color);
        font-size: 1.5rem;
        color: #fff;
        cursor: pointer;
    }
    .note-card__actions .action-favorite .bi-heart-fill{
       color:tomato; 
    }
    .favorite{
        display: flex;
    }
    .not-favorite{
        display: none;
    }

</style>