const QuestionsService = require("../service/questions");

const markdownToHtml = require("../utils/markdownToHtml");


const MODULE_NAME = "questions";


module.exports = (app) => {
    app.get(`/${MODULE_NAME}/list/:parentId?`, async (req, res, next) => {
        const parentId = req.params.parentId;

        try {
            let questions = [];

            if(parentId) {
                questions = await QuestionsService.getQuestionsOfParent(parentId);
            } else {
                questions = await QuestionsService.getRootQuestions();
            }

            res.send(questions);
        } catch(error) {
            next(error);
        }
    });


    app.get(`/${MODULE_NAME}/get/:questionId`, async (req, res, next) => {
        const questionId = req.params.questionId;

        try {
            const questions = await QuestionsService.getById(questionId);
            const question = questions[0].toObject();

            if(!question) {
                next(new Error('error'));
            }

            question.parsedAnswer = markdownToHtml(question.answer);

            res.send(question);
        } catch(error) {
            next(error);
        }
    });


    app.put(`/${MODULE_NAME}/update/`, async (req, res, next) => {
        const question = req.body;

        try {
            if(question.id) {
                await QuestionsService.update(question);
            } else {
                await QuestionsService.save(question);
            }

            res.sendStatus(200);
        } catch(error) {
            next(error);
        }
    });


    app.delete(`/${MODULE_NAME}/delete/:questionId`, async (req, res, next) => {
        const questionId = req.params.questionId;

        try {
            await QuestionsService.delete(questionId);
            res.sendStatus(200);
        } catch(error) {
            next(error);
        }
    });
};
