const QuestionsService = require("../service/questions");


const MODULE_NAME = "questions";


module.exports = (app) => {
    app.get(`/${MODULE_NAME}/all`, async (req, res, next) => {
        try {
            const questions = await QuestionsService.getAll();
            res.send(questions);
        } catch(error) {
            next(error);
        }
    });
};
