<template>
    <li>
        <div @click="showQuestion" class="question-container">
            <span>{{question.question}}</span>

        </div>

        <span class="has-children-arrow" v-if="questionHasChildren(question)">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
        </span>

        <router-link :to="{ name: 'edit-question', params: { qid: question.id }}">
            <i class="fa fa-pencil" aria-hidden="true"></i>
        </router-link>
    </li>
</template>

<script>
    import api from "../api";

    export default {
        name: "question-list-item",
        props: [
            "question"
        ],

        methods: {
            questionHasChildren(question) {
                return question.childrenQuestions && question.childrenQuestions.length > 0;
            },

            showQuestion() {
                console.log(222, this.question);

                this.$emit("questionItemClicked", this.question);
            },
        },

        async mounted() {
            // const r = await api().get();

            // console.log(r.data)
        }
    }
</script>

<style scoped>
    .page-content-block ul li {
        display: flex;
        justify-content: space-between;
        color: white;
        border-radius: 3px;
        text-align: left;
        padding: 12px 18px;
        margin: 5px 0;
        border: 1px solid rgba(44, 46, 50, 0.32);
        background-color: rgba(44, 46, 50, 0.1);
    }

    .page-content-block ul li a {
        display: block;
        border-radius: 3px;
        /*width: 100%;*/
        color: #000;
    }

    .page-content-block ul li span {
        color: #000;
    }

    .page-content-block ul li div {
        display: flex;
        justify-content: space-between;
        flex: 1;
    }

    .page-content-block ul li span:last-child {
        margin-right: 12px;
    }

    .page-content-block ul li:hover {
        background-color: #2c2e32;
        cursor: pointer;
    }

    .page-content-block ul li:hover div {
        color: #ccc;
    }

    .page-content-block ul li:hover a,
    .page-content-block ul li:hover span {
        color: #fff;
    }

    .question-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #000;
    }

    .has-children-arrow {
        margin-right: 20px;
    }
</style>
