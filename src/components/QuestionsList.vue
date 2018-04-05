<template>

    <div class="page-block">
        <div class="page-title-block">
            <div class="nav">
                <h2>Я хочу...</h2>
                <span v-if="!isRootPage" class="back-link" @click="goBack">&lsaquo; Назад</span>
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

                return instance.shownQuestions
                    .filter(questionData => ~questionData.question.toLowerCase().indexOf(searchQuery));
            }
        },

        methods: {
            setQuestionsList() {
                const instance = this;
                const selectedQuestionId = this.$route.params.qid;

                let shownQuestions = [];

                if(selectedQuestionId) {
                    const currentQuestion = DBManager.getQuestionById(selectedQuestionId);

                    if(currentQuestion) {
                        shownQuestions = currentQuestion.childrenQuestions;
                        this.isRootPage = false;
                    } else {
                        shownQuestions = DBManager.getQuestions();
                        this.isRootPage = true;
                    }
                } else {
                    shownQuestions = DBManager.getQuestions();
                    this.isRootPage = true;
                }

                instance.shownQuestions = shownQuestions;
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
            this.setQuestionsList();
        },

        watch: {
            "$route": "setQuestionsList",
        }
    }
</script>


<style scoped>

</style>
