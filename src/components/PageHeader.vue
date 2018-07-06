<template>
    <div class="page-title-block">
        <div class="nav">
            <span v-if="includeBackArrow" class="back-link" @click="goBack">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
            </span>

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
            "includeBackArrow",
        ],

        data() {
            return {}
        },

        methods: {
            goBack() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .page-title-block h2 {
        text-align: left;
    }

    .back-link {
        cursor: pointer;
        font-size: 2em;
        color: blue;
        padding: 0 24px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .nav {
        display: flex;
        align-items: flex-end;
    }
</style>
