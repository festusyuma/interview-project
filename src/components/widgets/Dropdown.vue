<template>
    <div class="dropdown" >
        <div class="dropdown-title" @click="toggleDropdown" >
            <p class="dropdown-title-text" >{{title}}</p>
            <i class="fas fa-angle-down dropdown-icon" ></i>
        </div>
        <div class="dropdown-items" :class="{'show': dropdownIsActive}" >
            <div class="dropdown-item seen" v-for="item in items" :key="item.id" >
                <p>{{item.title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dropdown",
    data() {
        return {
            dropdownIsActive: false
        }
    },
    props: {
        title: String,
        items: Array
    },
    methods: {
        toggleDropdown() {
            this.dropdownIsActive = !this.dropdownIsActive
        }
    }
}
</script>

<style lang="scss" scoped>
.dropdown {
    color: #737373;

    .dropdown-title {
        padding: 15px 20px;
        border: 1px solid #f8f8f8;
        background: #ffffff;
        display: flex;

        .dropdown-title-text {
            flex-grow: 1;
        }
    }
}

.dropdown-icon {
    color: #4b19d6;
}
</style>