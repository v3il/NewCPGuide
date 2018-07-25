const QuestionsService = require("../service/questions");


const MODULE_NAME = "questions";


module.exports = (app) => {
    app.get(`/${MODULE_NAME}/list/:parentId?`, async (req, res, next) => {
        const parentId = req.params.parentId;

        try {
            let questions = [];

            if(parentId) {

            } else {
                questions = await QuestionsService.getRootQuestions();
            }

            res.send(questions);
        } catch(error) {
            next(error);
        }
    });
};
