<template>
    <form @submit.prevent="searchPhoto(query)" id="search-input-cover" >
        <i class="fas fa-search search-icon" ></i>
        <input type="text" placeholder="Find something..." title="search" class="search-input" v-model="query" >
        <button type="button" class="btn search-btn" @click="searchPhoto(query)" >
            <span class="search-btn-text" >Search</span>
            <span class="search-btn-icon" ><i class="fas fa-search" ></i></span>
        </button>
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

<style lang="scss" scoped>
#search-input-cover {
    border-radius: 0.5rem;
    padding: 15px 30px;
    margin: 0 1rem;
    box-shadow: 0 2px 15px 5px #e0e0e0;
    display: flex;
    flex-grow: 1;

    .search-icon {
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

    .search-btn {
        background: #4b19d6;
        .search-btn-icon {
            color: #ffffff;
        }
    }
}

@media screen and (max-width: 761px) {
    #search-input-cover {
        order: 3;
        margin: 2rem 0 0;
    }
}

@media screen and (max-width: 500px) {
    #search-input-cover {
        padding: 8px 15px;

        .search-input {
            padding: 0;
            margin: 0 0.5rem;
        }
    }

    .search-icon {
        display: none;
    }

    .search-btn {
        .search-btn-text { display: none }
    }
}
</style>