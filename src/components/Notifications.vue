<template>
    <div class="dropdown" id="notification" >
        <div class="dropdown-title" @click="toggleDropdown" >
            <i class="fas fa-bell" id="notification-icon" >
                <span class="badge bg-red" >4</span>
            </i>
        </div>
        <div class="dropdown-items" :class="{'show': dropdownIsActive}" >
            <div class="dropdown-item seen" v-for="notification in allNotifications" :key="notification.id" >
                <div class="image" >
                    <img :src="notification.img" alt="" />
                </div>
                <div class="notification" >
                    <p>{{notification.notification}}</p>
                    <small>{{notification.time}}</small>
                </div>
                <i class="fas fa-heart" v-if="notification.type === 'like'" ></i>
                <i class="fas fa-comment-alt" v-if="notification.type === 'comment'" ></i>
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

    .dropdown-items {
        left: -5rem;
        width: 20rem;
    }

    .dropdown-items:before,
    .dropdown-items:after {
        left: 5.75rem;
    }

    .fa-heart {
        color: red;
    }

    .fa-comment-alt {
        color: #4b19d6;
    }

    .dropdown-item {
        display: flex;
        align-items: center;
        padding: 1rem 2rem;

        .image {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #737373;
            margin-right: 10px;
            overflow: hidden;

            img {
                width: 100%;
                height: auto;
            }
        }

        .notification {
            flex-grow: 1;

            p{
                color: #4b19d6;
                font-size: .85rem;
            }

            small {
                color: #737373;
                font-size: .8rem;
            }
        }

        .notification:hover {
            cursor: pointer;
        }

        i {
            margin-left: 10px;
        }
    }
}
</style>