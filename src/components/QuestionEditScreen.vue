<template>

    <div class="page-block">
        <page-header
            :title="title"
            :includeBackArrow="includeBackArrow"
        ></page-header>

        <div class="page-content-block">
            <label for="question-title">Заголовок</label>
            <input type="text" id="question-title" v-model="question.question">

            <label for="js-answer-source">Содержимое</label>
            <textarea id="js-answer-source" v-model="question.answer"></textarea>
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
                title: "",
                question: {
                    question: "",
                    answer: "",
                },
                codeMirrorInstance: null,

                includeBackArrow: true,
            }
        },

        computed: {
            // title() {
            //     return `Редактирование вопроса "${this.question.question}"`;
            // },

            // answer() {
            //     return this.question ? this.question.answer : "";
            // }
        },


        methods: {
            update() {
                api().post(`/update/${this.$route.params.qid}`, this.question)
                    .then(res => console.log("ok"));
            }
        },

        async mounted() {
            const questionId = this.$route.params.qid;

            if(questionId === "new") {
                console.log(1)
                this.title = `Добавление нового вопроса`;
            } else {
                console.log(2)
                const response = await api().get(`/question/${questionId}`);
                this.question = await response.data;

                this.title = `Редактирование вопроса "${this.question.question}"`;
            }

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

            this.codeMirrorInstance.setValue(this.question.answer);

            this.codeMirrorInstance.on("change", event => {
                this.question.answer = this.codeMirrorInstance.getValue();
            });
        }
    }
</script>

<style>

    input {
        width: 100%;
        padding: 6px 12px;
        border-radius: 5px;
        border: solid #ccc 2px;
        font-size: 16px;
        outline: none;
    }

    label {
        display: block;
        text-align: left;
        margin: 20px 0 12px 0;
        font-weight: bold;
    }

    .answer-block {
        text-align: left;
    }

    .CodeMirror {
        height: 600px;
        font-size: 14px;
    }

    .CodeMirror-line {
        text-align: left;
    }
</style>

