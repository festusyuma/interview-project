<template>
    <div id="app">
        <SideNav />
        <div id="content" >
            <div id="search-and-profile" >
                <div class="nav-header-hidden" >
                    <h1>
                        <span class="nav-header-text" >bluecube</span>
                    </h1>
                </div>
                <SearchBar />
                <Notifications />
                <ProfileDropdown />
            </div>
            <Filters />
            <Pictures />
        </div>
    </div>
</template>

<script>
import SideNav from "./components/SideNav";
import SearchBar from "./components/widgets/SearchBar";
import Notifications from "./components/Notifications";
import ProfileDropdown from "./components/ProfileDropdown";
import Filters from "./components/Filters";
import Pictures from "./components/Pictures";

export default {
    name: 'App',
    components: {
        Pictures,
        Filters,
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
    height: 100vh;
}

#content {
    flex-grow: 1;
    padding: 1rem;
    background: #f8f8f8;
    overflow-y: auto;
}

#search-and-profile {
    display: flex;
    padding: 1rem;
    align-items: center;
}

.nav-header-hidden {
    color: #4b19d6;
    text-align: center;
    margin-right: auto;
    font-size: .7rem;
    display: none;
}

.btn {
    background: #5d5d5d;
    color: #fff;
    padding: 10px 30px;
    outline: none;
    border: none;
    box-shadow: none;
    border-radius: 0.5rem;
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
    top: 150%;
    min-width: 150px;
    background: #ffffff;
    box-shadow: 0 2px 5px #e0e0e0;
    display: none;
    z-index: 99;
}

.dropdown-items.show {
    display: block;
}

.dropdown-items:before,
.dropdown-items:after {
    content: '';
    position: absolute;
    bottom: 100%;
    border: 11px solid transparent;
    border-bottom-color: #e0e0e0;
}

.dropdown-items:after {
    border: 10px solid transparent;
    border-bottom-color: #ffffff;
}

.dropdown-item {
    padding: 10px;
    border-bottom: 1px solid #e0e0e0;
}

.dropdown-item:hover {
    background: #f9f9f9;
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
.bg-active { background: #13ba13 }
.bg-red { background: red }

@media screen and (max-width: 761px) {
    #search-and-profile {
        flex-wrap: wrap;
        justify-content: flex-end;
    }

    .nav-header-hidden {
        display: block;
    }
}

@media screen and (max-width: 600px) {
    #search-and-profile {
        padding: 0.25rem;
    }
}

@media screen and (max-width: 500px) {
    #content {
        padding: 0.5rem;
    }
}
</style>
