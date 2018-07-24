<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'start',
    }
</script>

<style>
    @import "../node_modules/font-awesome/css/font-awesome.css";
    /*@import "../node_modules/material-icons/css/material-icons.css";*/

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
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
        color: #2C2E32;
        max-width: 1000px;
        width: 100%;
        margin: 0 auto;
        padding: 24px;

        background: white;
        height: 100%;
        box-sizing: border-box;
        min-height: 100vh;
    }

    .page-content-block {
        margin-top: 20px;
    }







    @media screen and (max-width: 480px) {
        #start {
            padding: 12px;
        }
    }
</style>
