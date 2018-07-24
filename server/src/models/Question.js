const mongoose = require('mongoose');


const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },

    parentId: {
        type: String,
        required: true,
    },
});


SiteSchema.statics = {

};

SiteSchema.methods = {

};


module.exports = mongoose.model('Question', QuestionSchema);
