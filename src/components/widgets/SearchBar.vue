<template>
    <form @submit.prevent="searchPhoto(query)" id="search-input-cover" >
        <i class="fas fa-search" ></i>
        <input type="text" placeholder="Find something..." title="search" class="search-input" v-model="query" >
        <button type="button" class="btn search-btn" @click="searchPhoto(query)" >Search</button>
    </form>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: "SearchBar",
    data() {
        return {
            query: "",
        }
    },
    methods: mapActions(['searchPhoto'])
}
</script>

<style scoped>
#search-input-cover {
    border-radius: 0.5rem;
    padding: 15px 30px;
    margin: 0 1rem;
    box-shadow: 0 2px 15px 5px #e0e0e0;
    display: flex;
    flex-grow: 1;
}

i {
    color: #737373;
    font-size: 1.5rem;
    align-self: center;
}

.search-input {
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
    color: #393939;
    margin: 0 1rem;
    flex-grow: 1;
    padding: 0 15px;
}

.btn {
    background: #5d5d5d;
    color: #fff;
    padding: 10px 30px;
    outline: none;
    border: none;
    box-shadow: none;
    border-radius: 0.5rem;
}

.search-btn {
    background: #4b19d6;
}
@media screen and (max-width: 768px) {
    #search-input-cover {
        order: 2;
        margin-top: 2rem
    }
}
</style>