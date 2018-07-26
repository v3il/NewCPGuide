const Question = require("../models/Question");

module.exports = {
    async getRootQuestions() {
        let collection = await Question.find({
            parentId: {
                $eq: -1
            }
        });

        const rawCollection = collection.map(question => question.toObject());

        for(let i = 0; i < rawCollection.length; i++) {
            let question = rawCollection[i];
            question.hasChildren = await this.checkChildrenExistence(question.id)
        }

        return rawCollection;
    },

    async modifyQuestionsCollection(collection) {
        const rawCollection = collection
            .map(question => question.toObject());

        for(let i = 0; i < rawCollection.length; i++) {
            const question = rawCollection[i];
            question.hasChildren = await this.checkChildrenExistence(question.id)
        }

        return collection;
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

        if(question.parentId >= 0) {
            const parentQuestions = await this.getById(question.parentId);
            const parentQuestion = parentQuestions[0];

            if(parentQuestion) {
                parentQuestion.hasChildren = true;
                await parentQuestion.save();
            }
        }

        storedQuestion.parentId = question.parentId || -1;

        storedQuestion.save();
    },

    async save(question) {
        const questionId = await this.getNextQuestionId();

        const newQuestion = new Question({
            id: questionId,
            question: question.question,
            answer: question.answer,
            parentId: question.parentId || -1,
            hasChildren: false,
        });

        newQuestion.save();
    },

    async delete(questionId) {
        await Question.remove({
            id: {
                $eq: questionId
            }
        });
    },

    async getNextQuestionId() {
        const questionsWithMaxId = await Question.find().sort({ id: -1 }).limit(1);
        const questionWithMaxId = questionsWithMaxId[0];

        return questionWithMaxId ? questionWithMaxId.id + 1 : 0;
    },

    async checkChildrenExistence(questionId) {
        const children = await this.getQuestionsOfParent(questionId);
        return children.length > 0;
    }
};
