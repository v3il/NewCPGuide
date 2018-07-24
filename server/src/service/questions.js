const Question = require("../models/Question");

module.exports = {
    async getAll() {
        return Question.find();
    }
};
