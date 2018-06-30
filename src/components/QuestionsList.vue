<template>

    <div class="page-block">
        <div class="page-title-block">
            <div class="nav">
                <h2>Я хочу...</h2>
                <span v-if="!isRootPage" class="back-link" @click="goBack">&lsaquo;</span>
            </div>

            <input v-model="searchQuery" type="text" placeholder="Начните писать хотелку" autofocus>
        </div>

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

    export default {
        store: DBManager,
        name: 'QuestionsList',

        components: {
            QuestionListItem
        },

        data() {
            return {
                searchQuery: this.$route.params.query || '',
                shownQuestions: [],
                isRootPage: false
            }
        },

        computed: {
            filteredQuestions() {
                const instance = this;
                const searchQuery = instance.searchQuery.toLowerCase();

                console.log(instance.shownQuestions.length)

                return instance.shownQuestions
                    .filter(questionData => ~questionData.question.toLowerCase().indexOf(searchQuery));
            },

            allQuestions () {
                return this.$store.getters.questions;
            }
        },

        methods: {
            setQuestionsList() {
                const instance = this;
                const selectedQuestionId = this.$route.params.qid;

                let shownQuestions = [];

                if(selectedQuestionId) {
                    console.log(1)
                    const currentQuestion = this.$store.getters.getById(selectedQuestionId);

                    if(currentQuestion) {
                        shownQuestions = currentQuestion.childrenQuestions;
                        this.isRootPage = false;
                    } else {
                        shownQuestions = this.allQuestions;
                        this.isRootPage = true;
                    }
                } else {
                    console.log(2)
                    shownQuestions = this.allQuestions;
                    this.isRootPage = true;
                }

                instance.shownQuestions = shownQuestions;

                console.log(instance.shownQuestions.length)
            },

            goBack() {
                this.$router.go(-1);
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
            this.allQuestions.length;
            this.$store.dispatch('loadQuestions');
            this.setQuestionsList();

            setTimeout(() => {
                this.$store.getters.getById(1).question += "test";
                this.$store.dispatch('updateQuestions');
            }, 2000)
        },

        watch: {
            $route: "setQuestionsList",
            allQuestions: "setQuestionsList"
        }
    }
</script>


<style scoped>

</style>
