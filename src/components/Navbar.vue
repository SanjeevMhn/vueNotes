<script>
    export default{
        name: "Navbar",
        data(){
            return{
                menus: ["Home","Create Note","Favorites","Profile"]
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
            <input type="text" name="search" id="" class="search-input" placeholder="Search Notes...">
            <i class="bi bi-search"></i>
        </div>
        <ul class="nav-list">
           <li class="nav-list__item" :class="{'nav-list__item--active':index===0}" v-for="(menu,index) in menus" :key="index">
               <a href="javascript:void(0)" class="nav-list__link-item">
                   {{menu}}
               </a>
            </li> 
        </ul>
    </nav>
</template>

<style scoped>

    .primary-nav{
        --nav-color: #272932;
        width: 100%;
        background-color: var(--nav-color);
        padding: 1rem 4rem;
        display: flex;
        font-family: 'Poppins',sans-serif;
        align-items: center;
        color: #fff;
        gap: 2rem;
    }
    .primary-nav .primary-nav__brand{
        font-size: 2rem;
    }

    .primary-nav .search-section{
        position: relative;
        display: flex;
        align-items: center;
        min-width: 25rem;
    }
    .primary-nav .search-section .search-input{
        margin: 0;
        width: 100%;
        font-size: 1.2rem;
        color: #090909;
        padding: 0.65rem;
        border-radius: 8px;
        outline: none;
        border: none;
    }
    .primary-nav .search-section i{
        position: absolute;
        font-size: 1.25rem;
        right: 15px;
        color: #090909;
    }
    .primary-nav .nav-list{
        list-style-type: none;
        padding: 0;
        margin: 0;  
        display: flex;
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
</style>
