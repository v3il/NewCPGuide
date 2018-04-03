<template>

    <div class="page-block">
        <div class="page-title-block">
            <div class="nav">
                <h2>{{this.question.question}}</h2>
                <span class="back-link" @click="goBack">&lsaquo; Назад</span>
            </div>

        </div>

        <div class="page-content-block">
            <div v-html="this.question.answer" class="answer-block"></div>
        </div>
    </div>

</template>

<script>
    import db from "../../db.js";

    export default {
        name: "question-screen",

        data() {
            return {
                question: null
            }
        },

        methods: {
            goBack() {
                this.$router.go(-1);
            },
        },

        created() {
            const instance = this;
            const questionId = +instance.$route.params.qid;
            instance.question = db.questions.filter(questionData => +questionData.id === +questionId)[0];

            console.log(111, instance.question, questionId)
        }
    }
</script>

<style>

    .answer-block {
        text-align: left;
    }

    .answer-block code {
        display: block;
        position: relative;
        background-color: #e2e2e2;
        padding: 6px 12px;
        margin: 12px 0;
        color: black;
        font-weight: bold;
        border-radius: 2px;
        font-size: 14px;
        cursor: pointer;
    }
</style>

