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
    @import "../node_modules/font-awesome/css/font-awesome.css";

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

    /*.page-block {*/
        /*height: 100%;*/
        /*position: relative;*/
    /*}*/












    @media screen and (max-width: 480px) {
        #app {
            padding: 12px;
        }
    }
</style>
