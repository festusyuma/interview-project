<template>
    <div id="side-nav" >
        <div class="nav-header" >
            <h1>
                <span class="nav-header-icon" ><i class="fas fa-cube"></i></span>
                <span class="nav-header-text" >bluecube</span>
            </h1>
        </div>
        <NavLink icon="fas fa-home" title="Home" link="" class="active" />
        <NavLink icon="fas fa-sticky-note" title="Message" link="" />
        <div class="nav-group" >
            <div class="nav-group-title" >
                SHARE
            </div>
            <NavLink icon="fas fa-chart-bar" title="Ranking" link="" />
            <NavLink icon="fas fa-chess-queen" title="Challenge" link="" />
            <NavLink icon="fas fa-holly-berry" title="Party" link="" />
            <NavLink icon="fas fa-link" title="Connect" link="" />
            <NavLink icon="fas fa-walking" title="Parade" link="" />
            <NavLink icon="fas fa-users" title="Group" link="" />
        </div>
    </div>
</template>

<script>
import NavLink from "./widgets/NavLink";
export default {
    name: "SideNav",
    components: {NavLink}
}
</script>

<style lang="scss" scoped>
#side-nav {
    border-right: 1px solid #e0e0e0;
    min-height: 100vh;
    min-width: 200px;
    padding: 20px 40px 20px 50px;
}

.nav-header {
    margin-top: 30px;
    margin-bottom: 40px;
    color: #4b19d6;
    text-align: center;

    .nav-header-icon {
        padding-right: 5px;
    }
}

.nav-group {
    margin-top: 15px;
    .nav-group-title {
        padding: 15px 30px;
    }
}

@media screen and (max-width: 1207px) {
    #side-nav {
        padding: 20px 20px 20px 20px;
    }

    .nav-header {
        font-size: .7rem;

        .nav-header-icon {
            padding-right: 5px;
        }
    }
}

@media screen and (max-width: 986px) {
    #side-nav {
        min-width: 50px;
    }

    .nav-header {
        font-size: .7rem;

        .nav-header-text {
            display: none;
        }
    }

    .nav-group-title {
        display: none;
    }
}
</style>