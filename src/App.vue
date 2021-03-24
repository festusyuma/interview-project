<template>
    <div id="app">
        <SideNav />
        <div id="content" >
            <div id="search-and-profile" >
                <SearchBar />
                <Notifications />
                <ProfileDropdown />
            </div>
        </div>
    </div>
</template>

<script>
import SideNav from "./components/SideNav";
import SearchBar from "./components/widgets/SearchBar";
import Notifications from "./components/Notifications";
import ProfileDropdown from "./components/ProfileDropdown";

export default {
    name: 'App',
    components: {
        ProfileDropdown,
        Notifications,
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
    background: #f8f8f8;
}

#search-and-profile {
    display: flex;
    padding: 1rem;
    align-items: center;
}

.dropdown {
    position: relative;
}

.dropdown-title {
    padding: 5px 10px;
    display: flex;
    align-items: center;
}

.dropdown-items {
    position: absolute;
    top: 0;
    left: -2.5rem;
    width: 15em;
    margin-top: 100%;
    border: 1px solid #393939;
    background: #ffffff;
}

.dropdown-title:hover {
    cursor: pointer;
}

.dropdown-icon {
    color: #393939;
    margin-left: 10px;
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
