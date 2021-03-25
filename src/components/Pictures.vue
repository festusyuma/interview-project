<template>
    <div id="container" >
        <div id="people-cover" >
            <Photo v-for="photo in allPictures" :key="photo.id" :photo="photo" />
        </div>
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
    padding: 15px 15px;
    margin-top: 10px;

    display: grid;
    grid-template-columns: auto auto auto auto auto;
}

@media screen and (max-width: 1200px) {
    #people-cover {
        grid-template-columns: auto auto auto auto;
    }
}

@media screen and (max-width: 1010px) {
    #people-cover {
        grid-template-columns: auto auto auto;
    }
}

@media screen and (max-width: 700px) {
    #people-cover {
        grid-template-columns: auto auto;
    }
}

@media screen and (max-width: 450px) {
    #people-cover {
        grid-template-columns: auto;
    }
}

</style>