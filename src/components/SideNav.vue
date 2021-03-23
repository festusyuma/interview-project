<template>
    <div id="side-nav" >
        <div class="nav-header" >
            <h1>
                <span class="nav-header-icon" ><i class="fas fa-cube"></i></span>
                bluecube
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
    height: 100vh;
    width: 15vw;
    padding: 1rem 2rem 1rem 5rem;
}

.nav-header {
    margin-top: 2rem;
    margin-bottom: 2.5rem;
    color: #4b19d6;
    text-align: center;

    .nav-header-icon {
        padding-right: 5px;
    }
}

.nav-group {
    margin-top: 0.75rem;
    .nav-group-title {
        padding: 15px 30px;
    }
}
</style>