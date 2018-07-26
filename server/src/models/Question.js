const mongoose = require('mongoose');


const QuestionSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },

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
        default: -1,
    },

    // hasChildren: {
    //     type: Boolean,
    //     required: true,
    //     default: false,
    // }
});


module.exports = mongoose.model('Question', QuestionSchema);
