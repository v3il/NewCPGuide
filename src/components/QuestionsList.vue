<template>
    <div class="page-block">
        <page-header
            :title="title"
            :includeBackArrow="includeBackArrow"
        >
            <template slot="additionalContent">
                <div class="header-form">
                    <input
                        v-model="searchQuery"
                        type="text"
                        class="filter-questions-input"
                        placeholder="Начните писать хотелку"
                        autofocus
                    >

                    <router-link
                        v-if="isAdmin"
                        class="add-new"
                        :to="{name: 'add-question', params: {qid: 'new'}}"
                    >Добавить</router-link>
                </div>
            </template>
        </page-header>


        <div class="page-content-block">
            <ul>
                <QuestionListItem
                    v-for="question in this.filteredQuestions"
                    :question="question"
                    :key="question.id"
                    @questionItemClicked="showQuestion"
                    @questionItemRemoved="removeQuestion"
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

    import UserRoleResolver from "../mixins/UserRoleResolver";
    import api from "../api";

    export default {
        name: 'QuestionsList',

        store: DBManager,

        mixins: [
            UserRoleResolver
        ],

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

            async setQuestionsList() {
                const instance = this;
                const selectedQuestionId = this.$route.params.qid;

                let shownQuestions = [];

                // await this.loadQuestions();

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
                if(question.hasChildren) {
                    this.$router.push({
                        path: `/${question.id}`
                    });
                } else {
                    this.$router.push({
                        path: `/q/${question.id}`
                    });
                }
            },

            removeQuestion(question) {
                api().delete(`/delete/${question.id}`)
                    .then(() => {
                        console.log("ok");
                        this.loadQuestions();
                    })
            },
        },

        created() {
            console.log(this.isAdmin);
            this.loadQuestions();
        },

        watch: {
            $route: {
                async handler() {
                    await this.loadQuestions();
                    this.setQuestionsList();
                }
            },
            allQuestions: "setQuestionsList"
        }
    }
</script>


<style>

    .header-form {
        display: flex;
        align-items: center;
    }

    .filter-questions-input {
        width: 100%;
        padding: 6px 12px;
        border-radius: 5px;
        border: solid #ccc 2px;
        font-size: 16px;
        outline: none;
        margin: 12px 12px 12px 0;
    }

    .page-content-block ul {
        list-style: none;
    }

    .add-new {
        color: #fff;
        background-color: #5cb85c;
        border-color: #4cae4c;

        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        user-select: none;
        background-image: none;
        border-radius: 4px;
        text-decoration: none;
    }
</style>
