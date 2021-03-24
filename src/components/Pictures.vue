<template>
    <div id="people-cover" >
        <Photo v-for="photo in allPictures" :key="photo.id" :photo="photo" />
    </div>
</template>

<script>
import Photo from "./Photo";
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "Pictures",
    components: {Photo},
    computed: {
        ...mapGetters(['allPictures'])
    },
    methods: {
        ...mapActions(['fetchPictures'])
    },
    created() {
        this.fetchPictures()
    }
}
</script>

<style scoped>
#people-cover {
    padding: 15px 30px;
    margin-top: 10px;

    display: flex;
    flex-wrap: wrap;
}
</style>