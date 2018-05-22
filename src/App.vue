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
        font-size: 18px;
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

    .back-link {
        text-align: left;
        cursor: pointer;
        margin: 12px 0 12px 0;
    }

    .nav {
        display: flex;
        flex-direction: column;
    }

    .page-title-block input {
        width: 100%;
        padding: 6px 12px;
        border-radius: 5px;
        border: solid #ccc 2px;
        margin: 12px 0;
        font-size: 16px;
    }

    @media screen and (max-width: 480px) {
        #app {
            padding: 12px;
        }
    }
</style>
