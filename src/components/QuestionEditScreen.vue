<template>

    <div class="page-block">
        <page-header
            :title="title"
            :includeBackArrow="includeBackArrow"
        ></page-header>

        <div class="page-content-block">
            <textarea id="js-answer-source">{{answer}}</textarea>
            <!--<div v-html="this.question.answer" class="answer-block"></div>-->
        </div>

        <button @click="update()">Save</button>
    </div>

</template>

<script>
    import DBManager from "../DBManager";
    import CodeMirror from "codemirror";

    import PageHeader from "./PageHeader";

    import api from "../api";

    import "../../node_modules/codemirror/lib/codemirror.css";
    import "../../node_modules/codemirror/mode/xml/xml";
    import "../../node_modules/codemirror/mode/markdown/markdown";
    import "../../node_modules/codemirror/theme/eclipse.css";

    export default {
        name: "question-screen",

        store: DBManager,

        components: {
            PageHeader,
        },

        data() {
            return {
                question: {},
                codeMirrorInstance: null,

                includeBackArrow: true,
            }
        },

        computed: {
            title() {
                return `Редактирование вопроса "${this.question.question}"`;
            },

            answer() {
                return this.question ? this.question.answer : "";
            }
        },


        methods: {
            update() {
                api().post(`/update/${+this.$route.params.qid}`, {
                    answer: this.answer
                })
                    .then(res => console.log("ok"));
            }
        },

        created() {





            // instance.question = this.$store.getters.getById(questionId);
        },

        async mounted() {
            const instance = this;

            const questionId = +this.$route.params.qid;

            const response = await api().get(`/question/${questionId}`);
            const question = await response.data;

            this.question = question;


            console.log(this.answer)

            const sourceTextarea = document.getElementById("js-answer-source");

            this.codeMirrorInstance = CodeMirror.fromTextArea(sourceTextarea, {
                lineNumbers: true,
                cursorScrollMargin: 10,
                undoDepth: 200,
                historyEventDelay: 200,
                theme: 'eclipse',
                lineWrapping: true,
                mode : "markdown",
                htmlMode: true,
                height: 500
            });

            this.codeMirrorInstance.setValue(this.answer);

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

    /*.answer-block pre {*/
        /*font-size: 1rem;*/
        /*padding: .66001rem 9.5px 9.5px;*/
        /*line-height: 2rem;*/
        /*background-size: 100% 4rem;*/
        /*display: block;*/
        /*margin: 0 0 10px;*/
        /*word-break: break-all;*/
        /*word-wrap: break-word;*/
        /*color: #333;*/
        /*background: #f5f5f5 linear-gradient(to bottom, #fff 0, #fff .75rem, #f5f7fa .75rem, #f5f7fa 2.75rem, #fff 2.75rem, #fff 4rem);*/
        /*border: 1px solid #d3daea;*/
        /*border-radius: 4px;*/
        /*display: block;*/
        /*margin: 0 0 10px;*/
        /*word-break: break-all;*/
        /*word-wrap: break-word;*/
        /*color: #333;*/
        /*background-color: #f5f5f5;*/
        /*border: 1px solid #ccc;*/
        /*border-radius: 4px;*/
    /*}*/

    /*.answer-block code {*/
        /*color: inherit;*/
        /*white-space: pre-wrap;*/
        /*background-color: transparent;*/
        /*border-radius: 0;*/
        /*font-family: monospace,monospace;*/
        /*font-size: 1rem;*/
        /*margin-bottom: 1.33999rem;*/
        /*padding: .66001rem 9px 9px;*/
        /*line-height: 2rem;*/
        /*font-weight: bold;*/
    /*}*/

    .CodeMirror {
        height: 800px;
        font-size: 14px;
    }

    .CodeMirror-line {
        text-align: left;
        /*margin-top: 4px !important;*/
        /*margin-bottom: 4px !important;*/
    }
</style>

