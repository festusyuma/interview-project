<template>
    <div id="app">
        <SideNav />
    </div>
</template>

<script>
import SideNav from "./components/SideNav";

export default {
    name: 'App',
    components: {
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
</style>
