<template>
    <div id="people-cover" >
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
    </div>
</template>

<script>
import Person from "./Person";
export default {
    name: "People",
    components: {Person}
}
</script>

<style scoped>
#people-cover {
    padding: 15px 30px;
    margin-top: 10px;

    display: inline-flex;
    flex-wrap: wrap;
}
</style>