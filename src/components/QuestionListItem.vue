<template>
    <li>
        <div @click="showQuestion" class="question-container">
            <span>{{question.question}}</span>
        </div>

        <div v-if="isAdmin" class="question-actions">
            <span v-if="question.hasChildren">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </span>

            <router-link :to="{ name: 'edit-question', params: { qid: question.id }}">
                <i class="fa fa-pencil question-action question-action_edit" aria-hidden="true"></i>
            </router-link>

            <i @click="emitRemove()" class="fa fa-times question-action question-action_remove" aria-hidden="true"></i>
        </div>
    </li>
</template>

<script>
    import UserRoleResolver from "../mixins/UserRoleResolver";

    export default {
        name: "question-list-item",

        mixins: [
            UserRoleResolver,
        ],

        props: [
            "question"
        ],

        methods: {
            showQuestion() {
                this.$emit("questionItemClicked", this.question);
            },

            emitRemove() {
                this.$emit("questionItemRemoved", this.question);
            },
        },
    }
</script>

<style scoped>
    .page-content-block ul li {
        display: flex;
        justify-content: space-between;
        color: black;
        border-radius: 3px;
        text-align: left;
        padding: 12px 18px;
        margin: 5px 0;
        border: 1px solid rgba(44, 46, 50, 0.32);
        background-color: rgba(44, 46, 50, 0.1);
    }

    .page-content-block ul li:hover {
        background-color: #2c2e32;
        cursor: pointer;
    }

    .page-content-block ul li:hover div,
    .page-content-block ul li:hover .question-action {
        color: #ccc;
    }

    .question-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #000;
        flex: 1;
    }

    .question-actions {
        display: flex;
    }

    .question-action {
        margin-left: 18px;
        cursor: pointer;
        color: #2C2E32;
    }
</style>
