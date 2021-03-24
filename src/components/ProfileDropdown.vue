<template>
    <div class="dropdown" id="profile" >
        <div class="dropdown-title" @click="toggleDropdown" >
            <div class="profile-img" >
                <span class="badge bg-green" ></span>
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

<style scoped>
#profile {
    margin: 0 .5rem;
}
</style>