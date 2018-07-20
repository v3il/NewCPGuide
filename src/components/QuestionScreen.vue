<template>

    <div class="page-block">
        <template v-if="widgetStatus === 'loading'">
            <div class="overlay">
                <i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i>
            </div>
        </template>

        <template v-if="widgetStatus === 'error'">

        </template>

        <template  v-if="widgetStatus === 'loaded'">
            <page-header
                :title="title"
                :includeBackArrow="includeBackArrow"
            ></page-header>

            <div class="page-content-block">
                <div v-html="parsedAnswer" class="answer-block"></div>
            </div>
        </template>
    </div>

</template>

<script>
    import PageHeader from "./PageHeader";

    import api from "../api";

    export default {
        name: "question-screen",

        components: {
            PageHeader,
        },

        computed: {
            title() {
                return this.question.question;
            },

            parsedAnswer() {
                return this.question.parsedAnswer;
            }
        },

        data() {
            return {
                question: {},
                widgetStatus: '',
                includeBackArrow: true,
            }
        },

        methods: {},

        async created() {
            const instance = this;
            const questionId = +instance.$route.params.qid;

            this.widgetStatus = "loading";

            try {
                const response = await api().get(`/question/${questionId}`);
                this.question = await response.data;

                this.widgetStatus = "loaded";
            } catch(error) {
                this.widgetStatus = "error";
            }
        },
    }
</script>

<style>

    .overlay {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #2c2e32;
    }

    .overlay i.fa {
        font-size: 50px;
        color: white;
    }

    .answer-block {
        text-align: left;
        line-height: 24px;
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

    .answer-block p {
        font-size: 16px;
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
        line-height: 2rem;
        font-weight: bold;
        display: inline-block;
    }

    .answer-block textarea::selection {
        background: transparent;
    }
</style>

