<template>
    <div class="dropdown" id="notification" >
        <div class="dropdown-title" >
            <i class="fas fa-bell" id="notification-icon" >
                <span class="badge bg-red" >4</span>
            </i>
        </div>
        <div class="dropdown-items" >
            <div class="notification-dropdown-item" >

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Notifications",
    data() {
        return {
            
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