<template>
    <div class="dropdown" id="profile" >
        <div class="dropdown-title" @click="toggleDropdown" >
            <div class="profile-img" >
                <span class="badge bg-active" ></span>
            </div>
            <p class="dropdown-title-text" >Festusyuma</p>
            <i class="fas fa-angle-down dropdown-icon" ></i>
        </div>
<!--    <div class="dropdown-items" :class="{'show': dropdownIsActive}" >
            <div class="dropdown-item seen">
                <p>this is one</p>
            </div>
            <div class="dropdown-item seen">
                <p>this is two</p>
            </div>
            <div class="dropdown-item seen">
                <p>this is three</p>
            </div>
        </div>-->
    </div>
</template>

<script>
export default {
    name: "ProfileDropdown",
    data() {
        return {
            dropdownIsActive: false
        }
    },
    methods: {
        toggleDropdown() {
            this.dropdownIsActive = !this.dropdownIsActive
        }
    }
}
</script>

<style lang="scss" scoped>
#profile {
    margin: 0 .5rem;

    .profile-img {
        background: url("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80");
        background-size: cover;
    }
}

@media screen and (max-width: 1024px) {
    .dropdown-title {
        .profile-img {
            margin-right: 0;
        }
        .dropdown-title-text {
            display: none;
        }
    }
}
</style>