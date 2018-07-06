<template>
    <!--<div class="page-title-block">-->
        <!--<div class="nav">-->
            <!--<h2> Редактирование вопроса `{{this.question.question}}`</h2>-->
            <!--<span class="back-link" @click="goBack">&lsaquo;</span>-->
        <!--</div>-->

    <!--</div>-->

    <div class="page-title-block">
        <div class="nav">
            <h2>{{title}}</h2>
            <span v-if="includeBackArrow" class="back-link" @click="goBack">&lsaquo;</span>
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
            return {

            }
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
        /*margin: 12px 0 12px 0;*/
        /*position: absolute;*/
        /*top: -12px;*/
        /*left: -54px;*/
        width: 30px;
        height: 30px;
        background: #ccc;
        text-align: center;
        line-height: 28px;
        font-weight: bold;
        border-radius: 3px 0 0 3px;
    }

    .nav {
        display: flex;
        flex-direction: column;
    }
</style>
