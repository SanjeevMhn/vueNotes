<script>
    export default{
        name: "Navbar",
        props: ['favorites','searchText'],
        data(){
            return{
                menus: ["Home","Favorites","Settings"],
                favs: this.favorites,
            }
        } 
    }
</script>

<template>
    <nav class="primary-nav">
        <div class="primary-nav__brand">
            Notes 
            <i class="bi bi-file-earmark-richtext"></i>
        </div>
        <div class="search-section">
            <input type="text" name="search" id="" class="search-input" placeholder="Search Notes..." v-bind="this.searchText">
            <i class="bi bi-search"></i>
        </div>
        <button class="side-nav-toggler" type="button">
            <i class="bi bi-list"></i>
        </button>
        <ul class="nav-list">
           <li class="nav-list__item" :class="{'nav-list__item--active':index===0}" v-for="(menu,index) in menus" :key="index">
               <a href="javascript:void(0)" class="nav-list__link-item">
                   {{menu}}
               </a>
                <div class="counter" v-if="index===1">{{this.favs.length}}</div>
            </li> 
        </ul>
    </nav>
</template>

<style scoped>

    .primary-nav{
        --nav-color: #272932;
        width: 100%;
        background-color: var(--nav-color);
        /* padding: 1rem 4rem; */
        padding: 1rem;
        display: flex;
        font-family: 'Poppins',sans-serif;
        align-items: center;
        color: #fff;
        gap: 2rem;
        position: sticky;
        top: 0;
        z-index: 100;
        border-bottom: 1px solid #fff;
    }
    .primary-nav .primary-nav__brand{
        font-size: 2rem;
    }

    .primary-nav .search-section{
        position: relative;
        display: flex;
        align-items: center;
        /* min-width: 25rem; */
    }
    .primary-nav .search-section .search-input{
        margin: 0;
        width: 100%;
        font-size: 1.2rem;
        color: #090909;
        padding: 0.65rem;
        display: none;
        border-radius: 8px;
        outline: none;
        border: none;
    }
    .primary-nav .search-section i{
        font-size: 1.25rem;
        right: 15px;
        /* color: #090909; */
        color: #fff;
        cursor: pointer;
    }
    .primary-nav .side-nav-toggler{
        padding: 0;
        margin: 0;
        background: none;
        color: #fff;
        font-size: 1.75rem;
        border: none;
        outline: none;
        margin-left: auto;
        cursor: pointer;
    }

    .primary-nav .nav-list{
        display: none;
        list-style-type: none;
        padding: 0;
        margin: 0;  
        /* display: flex; */
        gap: 0.75rem;
        margin-left: auto;
    }
    .nav-list .nav-list__link-item{
        text-decoration: none;
        color: #fff;
        padding: 0.5rem 0.7rem;
        font-size: 1.25rem;
        display: flex;
        align-items: center;
    } 
    .nav-list .nav-list__item{
        position: relative;
    }
    .nav-list .nav-list__item .counter{
        position: absolute;
        top: -2px;
        right: 0;
        background: tomato;    
        color: #fff;
        padding: 0;
        height: 22px;
        width: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 0.95rem;
    }
    .nav-list .nav-list__item--active{
        position: relative;
        display: flex;
        justify-content: center;
    }
    .nav-list .nav-list__item--active::after{
        content: '';
        height: 0.2rem;
        width: 100%;
        position: absolute;
        bottom: 0;
        background-color: #fff;
    }

    @media screen and (min-width: 768px){
        .primary-nav .search-section{
            min-width: 20rem;
        }
        .primary-nav .search-section .search-input{
            display: block;
        }
        .primary-nav .search-section i{
            position: absolute;
            color: #090909;
        }
    }

    @media screen and (min-width: 992px){
        .primary-nav{
            padding: 1rem 4rem;
        }
        .primary-nav .search-section{
            min-width: 25rem;
        }
    }

    @media screen and (min-width: 1200px) {
       .primary-nav .nav-list{
           display: flex;
       } 
       .primary-nav .side-nav-toggler{
           display: none;
       }
    }
</style>
