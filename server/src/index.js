const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');

const Promise = require('bluebird');
const mongoose = require('mongoose');


var showdown  = require('showdown'),
    converter = new showdown.Converter();


const questions = require("../db.json");



const app = express();

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors());

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/newcp-guide", (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('connected');
});


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

    if(!question) {
        questions.push({
            id: parseInt(`${Math.random() * 100000}`, 10),
            ...req.body,
        });

    } else {
        question.answer = req.body.answer;
        question.question = req.body.question;
    }

    // console.log(req.body.answer);



    // const questions = req.body;
    // console.log(questions)
    var writer = fs.createWriteStream('./db.json');
    writer.write(JSON.stringify(questions));

    res.sendStatus(200);
});


app.delete('/delete/:id', (req, res) => {
    const questionId = req.params.id;
    const question = getQuestionById(questionId);

    const index = questions.indexOf(question);

    questions.splice(index, 1);

    res.sendStatus(200);

    console.log("Remove", question);
});


app.listen(5000, function () {});
