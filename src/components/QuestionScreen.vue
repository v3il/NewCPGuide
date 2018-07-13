<template>

    <div class="page-block">
        <page-header
            :title="title"
            :includeBackArrow="includeBackArrow"
        ></page-header>

        <div class="page-content-block">
            <div v-html="getParsedAnswer()" class="answer-block"></div>
        </div>
    </div>

</template>

<script>
    import DBManager from "../DBManager";

    import PageHeader from "./PageHeader";

    import api from "../api";

    export default {
        name: "question-screen",

        store: DBManager,

        components: {
            PageHeader,
        },

        computed: {
            title() {
                return this.question.question;
            },
        },

        data() {
            return {
                question: {},

                // title: "",
                includeBackArrow: true,
            }
        },

        methods: {
            goBack() {
                this.$router.go(-1);
            },

            getParsedAnswer() {
                const answerCode = this.question.answer;

                if(!answerCode) {
                    return "";
                }

                return this.question.parsedAnswer;
                    // .replace(/\[=\s*(.*?)\s*=\]/g, "<div>$1</div>")
                    // .replace(/\(~[\s|\r|\n]*(.*?)[\s|\r|\n]*~\)/g, "<h2>$1</h2>")
                    // .replace(/[\t]*/g, "")
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

        async created() {
            const instance = this;
            const questionId = +instance.$route.params.qid;


            const response = await api().get(`/question/${questionId}`);
            const question = await response.data;

            this.question = question;
            this.question = question;

            console.log(question)

            // api().get(`/question/${questionId}`)
            //     // .then(res => res.json())
            //     .then(res => console.log(res));

            // instance.question = this.$store.getters.getById(questionId);
            // instance.title = this.question.question;
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
        /*margin-top: 20px;*/
    }

    .answer-block h2 {
        line-height: 36px;
        margin-bottom: 12px;
        margin-top: 12px;
    }

    .answer-block div {
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

    .answer-block pre {
        font-size: 1rem;
        padding: .66001rem 9.5px 9.5px;
        line-height: 2rem;
        background-size: 100% 4rem;
        display: block;
        margin: 0 0 10px;
        word-break: break-all;
        word-wrap: break-word;
        color: #333;
        background: #f5f5f5 linear-gradient(to bottom, #fff 0, #fff .75rem, #f5f7fa .75rem, #f5f7fa 2.75rem, #fff 2.75rem, #fff 4rem);
        border: 1px solid #d3daea;
        border-radius: 4px;
    }

    .answer-block code {
        color: inherit;
        white-space: pre-wrap;
        background-color: transparent;
        border-radius: 0;
        font-family: monospace,monospace;
        font-size: 1rem;
        margin-bottom: 1.33999rem;
        padding: .66001rem 9px 9px;
        line-height: 2rem;
        font-weight: bold;
        display: inline-block;
    }

    .answer-block textarea::selection {
        background: transparent;
    }
</style>

