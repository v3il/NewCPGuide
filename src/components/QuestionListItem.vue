<template>
    <li @click="showQuestion">
        <div class="question-container">
            {{question.question}}
            <span v-if="questionHasChildren(question)">&rsaquo;</span>
        </div>
    </li>
</template>

<script>
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
        }
    }
</script>

<style scoped>
    .page-content-block ul li {
        display: block;
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
        width: 100%;
        color: #000;
    }

    .page-content-block ul li span {
        color: #000;
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
</style>
