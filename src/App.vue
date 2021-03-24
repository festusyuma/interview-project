<template>
    <div id="app">
        <SideNav />
        <div id="content" >
            <div id="search-and-profile" >
                <SearchBar />
                <div class="dropdown" id="notification" >
                    <div class="dropdown-title" >
                        <i class="fas fa-bell" id="notification-icon" >
                            <span class="badge bg-red" >4</span>
                        </i>
                    </div>
                </div>
                <div class="dropdown" id="profile" >
                    <div class="dropdown-title" >
                        <div class="profile-img" >
                            <span class="badge bg-green" ></span>
                        </div>
                        <p class="dropdown-title-text" >Festusyuma</p>
                        <i class="fas fa-angle-down dropdown-icon" ></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideNav from "./components/SideNav";
import SearchBar from "./components/widgets/SearchBar";

export default {
    name: 'App',
    components: {
        SearchBar,
        SideNav
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

* {
    padding: 0;
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
}

#app {
    display: flex;
}

#content {
    flex-grow: 1;
    padding: 1rem;
}

#search-and-profile {
    display: flex;
    padding: 1rem;
    align-items: center;
}

.dropdown-title {
    padding: 5px 20px;
    display: flex;
    align-items: center;
}

.dropdown-title:hover {
    cursor: pointer;
}

.dropdown-icon {
    color: #393939;
    margin-left: 10px;
}

#notification-icon {
    color: #4b19d6;
    font-size: 2rem;
    position: relative;
    margin-right: 15px;
}

#profile .dropdown-title-text {
    color: #4b19d6;
}

.profile-img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: #696969;
    position: relative;
    margin-right: 20px;
}

.badge {
    position: absolute;
    bottom: -5px;
    right: -5px;
    height: 10px;
    min-width: 10px;
    padding: 5px;
    font-size: 0.7rem;
    text-align: center;
    border-radius: 50%;
    background: #393939;
    color: #ffffff;
}

.bg-green { background: green }
.bg-red { background: red }
</style>
