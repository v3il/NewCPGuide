const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');


var showdown  = require('showdown'),
    converter = new showdown.Converter()/*,
    text      = '# hello, markdown!',
    html      = converter.makeHtml(text)*/;


const questions = require("../db.json");



const app = express();

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors());


function getQuestionById(questionId) {
    const filteredQuestions = [];

    filterArray(questions);

    function filterArray(array) {
        for(let i = 0; i < array.length; i++) {
            const questionData = array[i];

            if(questionData.childrenQuestions) {
                filterArray(questionData.childrenQuestions);
            }

            if(questionData.id === +questionId) {
                filteredQuestions.push(questionData);
            }
        }
    }

    return filteredQuestions[0];
}




app.get('/', function (req, res) {
    console.log(questions)
    res.send(questions);
});

app.get('/question/:id', function (req, res) {
    const questionId = req.params.id;
    const question = getQuestionById(questionId);

    question.parsedAnswer = converter.makeHtml(question.answer);

    res.send(question);
});

app.post('/', function(req, res) {
    const questions = req.body;
    console.log(questions)
    var writer = fs.createWriteStream('./db.json');
    writer.write(JSON.stringify(questions));
});

app.post('/update/:id', function(req, res) {
    const questionId = req.params.id;
    const question = getQuestionById(questionId);

    // console.log(req.body.answer);

    question.answer = req.body.answer;

    // const questions = req.body;
    // console.log(questions)
    var writer = fs.createWriteStream('./db.json');
    writer.write(JSON.stringify(questions));
})

app.listen(3000, function () {});
