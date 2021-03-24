<template>
    <div class="nav-link" >
        <span class="nav-link-icon" ><i :class="icon" ></i></span>
        <a :href="link" >{{title}}</a>
    </div>
</template>

<script>
export default {
    name: "NavLink",
    props: {
        title: String,
        link: String,
        icon: String
    }
}
</script>

<style lang="scss" scoped>
.nav-link {
    padding: 15px 30px;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;


    a {
        color: #737373;
        text-decoration: none;
    }

    .nav-link-icon {
        padding-right: 10px;
        color: #5a5a5a;
    }
}

.nav-link.active {
    box-shadow: 0 0 2.5px #e0e0e0;
}

.nav-link:hover, .nav-link.active {
    border-color: #e0e0e0;
    cursor: pointer;

    a {
        color: #393939;
        font-weight: 500;
    }

    .nav-link-icon {
        color: #4b19d6;
    }
}

@media screen and (max-width: 1130px) {
    .nav-link {
        padding: 10px;
    }
}

@media screen and (max-width: 986px) {
    .nav-link {
        text-align: center;

        .nav-link-icon { padding-right: 0; }
        a { display: none;}
    }
}
</style>