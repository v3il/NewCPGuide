<template>

    <div class="page-block">
        <div class="page-title-block">
            <div class="nav">
                <h2> Редактирование вопроса `{{this.question.question}}`</h2>
                <span class="back-link" @click="goBack">&lsaquo;</span>
            </div>

        </div>

        <div class="page-content-block">
            <textarea id="js-answer-source">{{this.question.answer.trim()}}</textarea>
            <!--<div v-html="this.question.answer" class="answer-block"></div>-->
        </div>
    </div>

</template>

<script>
    import DBManager from "../DBManager";
    import CodeMirror from "codemirror";

    import "../../node_modules/codemirror/lib/codemirror.css";
    import "../../node_modules/codemirror/theme/zenburn.css";

    export default {
        name: "question-screen",

        store: DBManager,

        data() {
            return {
                question: null,
                codeMirrorInstance: null
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

            instance.question = this.$store.getters.getById(questionId);
        },

        mounted() {
            const sourceTextarea = document.getElementById("js-answer-source");

            this.codeMirrorInstance = CodeMirror.fromTextArea(sourceTextarea, {
                lineNumbers: true,
                cursorScrollMargin: 10,
                undoDepth: 200,
                historyEventDelay: 200,
                theme: 'zenburn',
                lineWrapping: true,
                mode: "html",
                height: 500
            });

            this.codeMirrorInstance.on("change", event => {
                this.question.answer = this.codeMirrorInstance.getValue();
            });
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

    .CodeMirror {
        height: 500px;
    }

    .CodeMirror-line {
        text-align: left;
    }
</style>

