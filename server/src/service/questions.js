const Question = require("../models/Question");

module.exports = {
    async getRootQuestions() {
        return Question.find({
            parentId: {
                $eq: -1
            }
        });
    },

    async getQuestionsOfParent(parentId) {
        return Question.find({
            parentId: {
                $eq: parentId
            }
        });
    },

    async getById(questionId) {
        return Question.find({
            id: {
                $eq: questionId
            }
        });
    },

    async update(question) {
        const storedQuestions = await this.getById(question.id);
        const storedQuestion = storedQuestions[0];

        storedQuestion.answer = question.answer;
        storedQuestion.question = question.question;

        storedQuestion.save();
    },

    async save(question) {
        const newQuestion = new Question({
            id: 300,
            question: question.question,
            answer: question.answer,
            parentId: -1,
            hasChildren: false,
        });

        newQuestion.save();
    },

    async delete(questionId) {
        return Question.remove({
            id: {
                $eq: questionId
            }
        });
    },
};
