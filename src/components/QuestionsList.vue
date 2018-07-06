<template>
    <div class="page-block">
        <page-header
            :title="title"
            :includeBackArrow="includeBackArrow"
        >
            <template slot="additionalContent">
                <input
                    v-model="searchQuery"
                    type="text"
                    class="filter-questions-input"
                    placeholder="Начните писать хотелку"
                    autofocus
                >
            </template>
        </page-header>


        <div class="page-content-block">
            <ul>
                <QuestionListItem
                    v-for="question in this.filteredQuestions"
                    :question="question"
                    :key="question.id"
                    @questionItemClicked="showQuestion"
                >
                </QuestionListItem>
            </ul>
        </div>
    </div>

</template>


<script>
    import DBManager from "../DBManager";
    import QuestionListItem from "./QuestionListItem";
    import PageHeader from "./PageHeader";

    import {mapGetters, mapActions} from "vuex";

    export default {
        name: 'QuestionsList',

        store: DBManager,

        components: {
            QuestionListItem,
            PageHeader,
        },

        data() {
            return {
                searchQuery: "",
                shownQuestions: [],

                title: "Я хочу...",
                includeSearchField: true,
            }
        },

        computed: {
            ...mapGetters([
                "allQuestions",
                "getById",
            ]),

            includeBackArrow() {
                return this.shownQuestions.length !== this.allQuestions.length;
            },

            filteredQuestions() {
                const vm = this;
                const searchQuery = vm.searchQuery.toLowerCase();

                return vm.shownQuestions
                    .filter(questionData => ~questionData.question.toLowerCase().indexOf(searchQuery));
            },
        },

        methods: {
            ...mapActions([
                "loadQuestions",
            ]),

            setQuestionsList() {
                const instance = this;
                const selectedQuestionId = this.$route.params.qid;

                let shownQuestions = [];

                if(selectedQuestionId) {
                    const currentQuestion = this.getById(selectedQuestionId);

                    if(currentQuestion) {
                        shownQuestions = currentQuestion.childrenQuestions;
                    } else {
                        shownQuestions = this.allQuestions;
                    }
                } else {
                    shownQuestions = this.allQuestions;
                }

                instance.shownQuestions = shownQuestions;
            },

            showQuestion(question) {
                if(question.childrenQuestions && question.childrenQuestions.length) {
                    this.$router.push({
                        path: `/${question.id}`
                    });
                } else {
                    this.$router.push({
                        path: `/q/${question.id}`
                    });
                }
            },
        },

        created() {
            this.loadQuestions();
        },

        watch: {
            $route: "setQuestionsList",
            allQuestions: "setQuestionsList"
        }
    }
</script>


<style>
    .filter-questions-input {
        width: 100%;
        padding: 6px 12px;
        border-radius: 5px;
        border: solid #ccc 2px;
        margin: 12px 0;
        font-size: 16px;
        outline: none;
    }

    .page-content-block ul {
        list-style: none;
    }
</style>
