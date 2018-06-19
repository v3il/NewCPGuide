const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const questions = require("./db");



const app = express();

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors());

app.get('/', function (req, res) {
    console.log(questions)
    res.send(questions);
});

app.listen(3000, function () {});
