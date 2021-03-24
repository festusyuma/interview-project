<template>
    <div id="search-input-cover" >
        <i class="fas fa-search" ></i>
        <input type="text" placeholder="Find something..." title="search" class="search-input" >
        <button type="button" class="btn search-btn" >Search</button>
    </div>
</template>

<script>
export default {
    name: "SearchBar"
}
</script>

<style scoped>
#search-input-cover {
    border-radius: 0.5rem;
    padding: 15px 30px;
    margin: 1rem;
    box-shadow: 0 2px 15px 5px #e0e0e0;
    display: flex;
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
</style>