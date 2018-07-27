<template>
    <div class="page-title-block">
        <div class="nav">
            <router-link v-if="url" class="back-link" :to="url">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
            </router-link>

            <h2>{{title}}</h2>
        </div>

        <slot name="additionalContent"></slot>
    </div>
</template>

<script>
    export default {
        name: "PageHeader",

        props: [
            "title",
            "url",
        ],
    }
</script>

<style scoped>
    .page-title-block h2 {
        text-align: left;
    }

    .back-link {
        cursor: pointer;
        font-size: 2em;
        color: #2C2E32;
        padding: 0 24px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        margin-top: -5px;
    }

    .nav {
        display: flex;
        align-items: center;
    }
</style>
