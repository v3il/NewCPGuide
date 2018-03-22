<template>

    <div class="page-block">
        <div class="page-title-block">
            <div class="nav">
                <!--v-show="this.showFilteredQuestionsList"-->
                <h2>Я хочу...</h2>
                <span class="back-link" @click="goBack">&lsaquo; Назад</span>
            </div>

            <input v-model="searchQuery" type="text" placeholder="Начните писать хотелку" autofocus>
        </div>

        <div class="page-content-block">
            <ul>
                <li v-for="question in this.filteredQuestions">
                    <div class="question-container" @click="showQuestion(question)">
                        {{question.question}}
                        <!--<span>&rsaquo;</span>-->
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>


<script>
    import db from "../../db.js";

    export default {
        name: 'QuestionsList',

        data() {
            return {
                searchQuery: this.$route.params.query || '',
                shownQuestions: []
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
                const currentQuestionsId = instance.$route.params.qid;

                let shownQuestions = [];

                if(currentQuestionsId) {
                    const currentQuestion = instance.getQuestionById(currentQuestionsId);

                    if(currentQuestion) {
                        shownQuestions = currentQuestion.childrenQuestions;
                    }
                } else {
                    shownQuestions = db.questions;
                }

                instance.shownQuestions = shownQuestions;
            },

            goBack() {
                this.$router.go(-1);
            },

            showQuestion(question) {
                console.log("click", question)
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


            getQuestionById(questionId) {
                return db.questions
                    .filter(questionData => questionData.id === +questionId)[0];
            }
        },

        created() {
            console.log("Created")
            this.setQuestionsList();

            // const currentQuestionsId = instance.$route.params.qid;
            // const searchQuery = instance.searchQuery.toLowerCase();
            //
            // if(searchQuery) {
            //     if(currentQuestionsId) {
            //         this.$router.push({
            //             path: `/query/${searchQuery}`
            //         });
            //     } else {
            //         this.$router.push({
            //             path: `/${currentQuestionsId}/query/${searchQuery}`
            //         });
            //     }
            // } else {
            //     if(currentQuestionsId) {
            //         this.$router.push({
            //             path: `/${currentQuestionsId}`
            //         });
            //     } else {
            //         this.$router.push({
            //             path: `/`
            //         });
            //     }
            // }
        },

        watch: {
            "$route": "setQuestionsList",
        }
    }
</script>


<style scoped>
    .page-title-block input {
        width: 100%;
        padding: 6px 12px;
        border-radius: 5px;
        border: solid #ccc 2px;
        margin: 12px 0;
        font-size: 16px;
    }

    .question-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #000;
    }
</style>
