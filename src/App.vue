<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #2c2e32;
        overflow-y: scroll;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
        padding: 24px;

        background: white;
        height: 100%;
        box-sizing: border-box;
        min-height: 100vh;
    }

    .page-block {
        height: 100%;
        position: relative;
    }

    a {
        color: white;
        text-decoration: none;
    }

    .page-title-block h2 {
        text-align: left;
    }

    .page-content-block ul {
        list-style: none;
    }

    .page-content-block ul li {
        display: block;
        color: white;
        border-radius: 3px;
        text-align: left;
        padding: 12px 18px;
        margin: 5px 0;
        border: 1px solid rgba(44, 46, 50, 0.32);
        background-color: rgba(44, 46, 50, 0.1);
    }

    .page-content-block ul li a {
        display: block;
        border-radius: 3px;
        width: 100%;
        color: #000;
    }

    .page-content-block ul li span {
        color: #000;
    }

    .page-content-block ul li:hover {
        background-color: #2c2e32;
        cursor: pointer;
    }

    .page-content-block ul li:hover a,
    .page-content-block ul li:hover span {
        color: #fff;
    }

    .back-link {
        text-align: left;
        cursor: pointer;
        margin: 12px 0 12px 0;
    }

    .nav {
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 480px) {
        #app {
            padding: 12px;
        }
    }
</style>
