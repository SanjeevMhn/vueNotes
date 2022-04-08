import {createRouter, createWebHistory, RouterLink} from 'vue-router';
import NotesContainer from '../components/NotesContainer.vue';
import FavoriteContainer from '../components/FavoriteContainer.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: NotesContainer,
            props: {
                notes: notes,
                favorites: favorites,
                searchText: searchText
            }
        },
        {
            path: '/favorites',
            name: 'favorites',
            component: FavoriteContainer
        }
    ]
})

export default router;