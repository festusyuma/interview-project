<template>
    <div id="app">
        <SideNav />
        <div id="content" >
            <SearchBar />
        </div>
    </div>
</template>

<script>
import SideNav from "./components/SideNav";
import SearchBar from "./components/widgets/SearchBar";

export default {
    name: 'App',
    components: {
        SearchBar,
        SideNav
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

* {
    padding: 0;
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
}

#app {
    display: flex;
}
</style>
