<template>
    <div id="filters-cover" >
        <div id="filters" >
            <div class="filter" v-for="filterData in filtersData" :key="filterData.id" >
                <Dropdown :title="filterData.title" :items="filterData.items"/>
            </div>
        </div>
    </div>
</template>

<script>
import Dropdown from "./widgets/Dropdown";
export default {
    name: "Filters",
    components: {Dropdown},
    data() {
        return {
            filtersData: [
                {
                    id: 1,
                    title: "World",
                    items: [
                        {id: 1, title: 'World one'},
                        {id: 2, title: 'World two'},
                        {id: 3, title: 'World three'},
                        {id: 4, title: 'World four'},
                    ]
                },
                {
                    id: 2,
                    title: "Following",
                    items: [
                        {id: 1, title: 'Following one'},
                        {id: 2, title: 'Following two'},
                        {id: 3, title: 'Following three'},
                        {id: 4, title: 'Following four'},
                    ]
                },
                {
                    id: 3,
                    title: "Popular",
                    items: [
                        {id: 1, title: 'Popular one'},
                        {id: 2, title: 'Popular two'},
                        {id: 3, title: 'Popular three'},
                        {id: 4, title: 'Popular four'},
                    ]
                },
                {
                    id: 4,
                    title: "Post",
                    items: [
                        {id: 1, title: 'Post one'},
                        {id: 2, title: 'Post two'},
                        {id: 3, title: 'Post three'},
                        {id: 4, title: 'Post four'},
                    ]
                },
                {
                    id: 5,
                    title: "Gender",
                    items: [
                        {id: 1, title: 'Gender one'},
                        {id: 2, title: 'Gender two'},
                        {id: 3, title: 'Gender three'},
                        {id: 4, title: 'Gender four'},
                    ]
                },
                {
                    id: 6,
                    title: "Location",
                    items: [
                        {id: 1, title: 'Location one'},
                        {id: 2, title: 'Location two'},
                        {id: 3, title: 'Location three'},
                        {id: 4, title: 'Location four'},
                    ]
                },
                {
                    id: 7,
                    title: "Profession",
                    items: [
                        {id: 1, title: 'Profession one'},
                        {id: 2, title: 'Profession two'},
                        {id: 3, title: 'Profession three'},
                        {id: 4, title: 'Profession four'},
                    ]
                },
            ]
        }
    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>
#filters-cover {
    padding: 15px 30px;
    margin-top: 10px;

    #filters {
        display: flex;
        flex-wrap: wrap;

        .filter {
            margin-bottom: 10px;
        }
    }
}
</style>