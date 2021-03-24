<template>
    <div class="dropdown" id="notification" >
        <div class="dropdown-title" @click="toggleDropdown" >
            <i class="fas fa-bell" id="notification-icon" >
                <span class="badge bg-red" >4</span>
            </i>
        </div>
        <div class="dropdown-items" :class="{'show': dropdownIsActive}" >
            <div class="dropdown-item" v-for="notification in allNotifications" :key="notification.id" >
                {{notification.notification}}
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "Notifications",
    computed: mapGetters(['allNotifications']),
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
#notification {
    margin: 0 .5rem;

    #notification-icon {
        color: #4b19d6;
        font-size: 2rem;
        position: relative;
        margin-right: 15px;
    }
}
</style>