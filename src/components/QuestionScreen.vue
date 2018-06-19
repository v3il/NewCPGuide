<template>

    <div class="page-block">
        <div class="page-title-block">
            <div class="nav">
                <h2>{{this.question.question}}</h2>
                <span class="back-link" @click="goBack">&lsaquo;</span>
            </div>

        </div>

        <div class="page-content-block">
            <div v-html="getParsedAnswer()" class="answer-block"></div>
        </div>
    </div>

</template>

<script>
    import DBManager from "../DBManager";

    export default {
        name: "question-screen",

        store: DBManager,

        data() {
            return {
                question: null
            }
        },

        methods: {
            goBack() {
                this.$router.go(-1);
            },

            getParsedAnswer() {
                const answerCode = this.question.answer;

                return answerCode
                    .replace(/\[=\s*(.*?)\s*=\]/g, "<textarea readonly>$1</textarea>")
                    .replace(/\(~[\s|\r|\n]*(.*?)[\s|\r|\n]*~\)/g, "<h2>$1</h2>")
                    .replace(/[\t]*/g, "")
                ;
            },

            codeElementClick(event) {
                const clickedElement = event.target;
                const parentTextareaElement = clickedElement.closest("textarea");

                if(parentTextareaElement) {
                    parentTextareaElement.select();
                    document.execCommand("copy");
                }
            }
        },

        created() {
            const instance = this;
            const questionId = +instance.$route.params.qid;

            instance.question = this.$store.getters.getById(questionId);
        },

        mounted() {
            document.removeEventListener("click", this.codeElementClick);
            document.addEventListener("click", event => this.codeElementClick(event));
        },

        destroyed() {
            document.removeEventListener("click", this.codeElementClick);
        }
    }
</script>

<style>

    .answer-block {
        text-align: left;
        line-height: 24px;
    }

    .answer-block h2 {
        line-height: 36px;
        margin-bottom: 12px;
        margin-top: 12px;
    }

    .answer-block textarea {
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
        width: 100%;
        resize: none;
        height: auto;
        user-select: none;
    }

    .answer-block textarea::selection {
        background: transparent;
    }
</style>

