<template>
    <div class="page-block">
        <page-header
            :title="title"
            :url="backLinkUrl"
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
                        :to="{name: 'edit-question', params: {qid: 'new'}}"
                    >Добавить</router-link>
                </div>
            </template>
        </page-header>


        <div class="page-content-block" v-if="this.filteredQuestions.length">
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

        <div v-else>
            Нет данных для отображения
        </div>
    </div>

</template>


<script>
    import QuestionListItem from "./QuestionListItem";
    import PageHeader from "./PageHeader";

    import api from "../api";

    export default {
        name: 'QuestionsList',

        components: {
            QuestionListItem,
            PageHeader,
        },

        data() {
            return {
                searchQuery: "",
                shownQuestions: [],

                title: "Я хочу...",
            }
        },

        computed: {
            backLinkUrl() {
                return this.$route.params.qid ? "/" : "";
            },

            filteredQuestions() {
                const vm = this;
                const searchQuery = vm.searchQuery.toLowerCase();

                return vm.shownQuestions
                    .filter(questionData => ~questionData.question.toLowerCase().indexOf(searchQuery));
            },
        },

        methods: {
            async loadQuestions() {
                const parentQuestionId = this.$route.params.qid || "";

                try {
                    const response = await api.get(`/questions/list/${parentQuestionId}`);
                    this.shownQuestions = await response.data;
                } catch (error) {
                    this.shownQuestions = [];
                }

                this.shownQuestions.sort((a, b) => +a.hasChildren - +b.hasChildren);
            },

            showQuestion(question) {
                if(question.hasChildren) {
                    this.$router.push({
                        path: `/questions/${question.id}`
                    });
                } else {
                    this.$router.push({
                        path: `/question/${question.id}`
                    });
                }
            },

            removeQuestion(question) {
                api.delete(`/questions/delete/${question.id}`)
                    .then(() => {
                        this.loadQuestions();
                    })
            },
        },

        created() {
            this.loadQuestions();

            console.log(this.isAdmin);
        },

        watch: {
            $route: "loadQuestions",
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
        margin: 12px 0;
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
        line-height: 1.42857143;
        text-align: center;
        cursor: pointer;
        user-select: none;
        border-radius: 4px;
        text-decoration: none;
        margin-left: 12px;
    }
</style>
