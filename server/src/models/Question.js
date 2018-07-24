const mongoose = require('mongoose');


const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        default: "",
    },
    answer: {
        type: String,
        required: true,
        default: "",
    },

    parentId: {
        type: Number,
        required: true,
        default: 0,
    },
});


QuestionSchema.statics = {

};

QuestionSchema.methods = {

};


module.exports = mongoose.model('Question', QuestionSchema);
